import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  id?: string;
  error?: string;
  type: "text" | "email" | "password" | "date";
  onChange?: (e: string) => void;
  value?: string | number;
};

const InputLabel = ({
  label,
  placeholder,
  id,
  error,
  type,
  onChange,
  value,
}: Props) => {
  return (
    <View className="flex border-gray-950 gap-1  rounded-md py-1 px-1">
      <Text className="">{label}</Text>
      <TextInput
        className=" border-slate-600 "
        id={id}
        placeholder={placeholder}
        onChangeText={onChange}
        value={String(value)}
        secureTextEntry={type === "password"}
        keyboardType={type === "email" ? "email-address" : "default"}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 400,
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    color: "#000",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  error: {
    color: "#f00",
    marginTop: 5,
    fontSize: 12,
  },
});

export default InputLabel;
