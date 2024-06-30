import { View, Text, Image, useWindowDimensions, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import InputLabel from '../Components/Inputs/inputLabel';
import * as Yup from "yup";
import Footer from '../Components/homeScreen/Footer';

export default function Login() {
    const navigation = useNavigation();


    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("El correo no es válido")
            .required("El correo es requerido"),
        password: Yup.string()
            .min(5, "Mínimo 5 caracteres.")
            .max(50, "Máximo 50 caracteres.")
            .required("La contraseña es requerida"),
    });

    return (
        <View className="flex-1" >
            <SafeAreaView className="flex-1 bg-[#1527b1]">
                <View className="flex-row justify-start">
                    <TouchableOpacity className="bg-[#FFD700] p-2 rounded-[10px] ml-4 rounded-tr-2xl rounded-bl-2xl" onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center ">
                    <Image source={require('../../assets/images/santar.png')} className="w-[90%] h-36" resizeMode='contain' />
                </View>
                <View className="flex-1 justify-end">
                    <View className="flex-1 bg-white mt-1 px-4 h-3/4 pt-5 rounded-tl-[50px] rounded-tr-[50px] rounded-br-3xl rounded-bl-3xl">
                        <View className="mb-5">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values) => console.log(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                    <View>
                                        <InputLabel
                                            label="Correo electronico o celular"
                                            name="email"
                                            placeholder="Correo o celular"
                                            onChange={handleChange("email")}
                                            value={values.email}
                                            error={touched.email && errors.email}
                                            type="email"
                                        />
                                        <InputLabel
                                            label="Contraseña"
                                            name="password"
                                            placeholder="Ingrese la contraseña"
                                            onChange={handleChange("password")}
                                            value={values.password}
                                            error={touched.password && errors.password}
                                            type="password"
                                        />
                                        <TouchableOpacity className='items-end mb-4'>
                                            <Text className='text-gray-600 text-base'>¿Olvidó su contraseña?</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => navigation.navigate('home')} className="mt-4 bg-[#FFD700] p-4 rounded-md">
                                            <Text className="text-center text-black font-bold">Ingresar</Text>
                                        </TouchableOpacity>
                                        <View className='py-3'>
                                            <Text className='text-2xl font-semibold text-center text-black px-0'>O</Text>
                                            <Text className='text-lg font-semibold text-center text-gray-900 px-0'>Inicia Session con:</Text>
                                        </View>


                                        <View className='flex-row justify-center mx-5'>
                                            <TouchableOpacity className="p-6 rounded-2xl" >
                                                <Image source={require('../../assets/images/google.png')} className="w-10 h-10" />
                                            </TouchableOpacity>

                                            <TouchableOpacity className="p-6 rounded-2xl" >
                                                <Image source={require('../../assets/images/apple.png')} className="w-10 h-10" />
                                            </TouchableOpacity>

                                            <TouchableOpacity className="p-6 rounded-2xl">
                                                <Image source={require('../../assets/images/facebook.png')} className="w-10 h-10" />
                                            </TouchableOpacity>

                                        </View>
                                        <View className='flex-row justify-center mt-2'>
                                            <Text className='text-gray-500 text-lg font-semibold mr-2'>No tienes cuenta?</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                                                <Text className='text-lg font-semibold text-yellow-500'>Registrarse</Text>
                                            </TouchableOpacity>
                                        </View>


                                    </View>


                                )}
                            </Formik>
                        </View>
                    </View>
                    <Footer/>
                </View>
            </SafeAreaView>
        </View>
    )
}
