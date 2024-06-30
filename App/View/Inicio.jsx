import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../../assets/images/register.jpeg')} className='flex-1 items-center'>
            <Image source={require('../../assets/images/santar.png')} className='h-32 mt-16 ' resizeMode='contain' />
            <SafeAreaView className='flex-1 justify-center items-center'>
                <View className='flex-1 justify-center mt-36'>
                    <Image source={require("../../assets/images/camellosleft.gif")} className="h-80 w-80"  />
                </View>

                <View className='justify-end items-center mb-16'>
                    <TouchableOpacity className="bg-yellow-500 py-5 px-28 rounded-2xl opacity-90" onPress={() => navigation.navigate('login')}>
                        <Text className='font-bold text-2xl text-center'>Empezar</Text>
                    </TouchableOpacity>

                    <View className='flex-row justify-center mt-2'>
                        <Text className='text-white text-lg font-semibold mr-2'>No tienes cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('register')}>
                            <Text className='text-lg font-semibold text-yellow-500'>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
