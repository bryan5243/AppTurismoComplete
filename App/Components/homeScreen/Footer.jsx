import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

export default function Footer() {
    return (
        <View className="bg-[#1527b1] items-center p-1 w-100 " >
            <Text className='text-base font-semibold mb-2 text-white'>Nuestras Redes Sociales</Text>
            <View className='flex-row'>
                <TouchableOpacity className=' mb-2   px-5 mx-1 rounded-md' onPress={() => handlePress('Facebook')}>
                    <Image source={require('../../../assets/images/facebook.png')}
                        className='h-9 w-9' resizeMode='cover'
                    />
                </TouchableOpacity>
                <TouchableOpacity className='mb-2 px-5 mx-1 rounded-md' onPress={() => handlePress('Instagram')}>

                    <Image source={require('../../../assets/images/instagram.png')}
                        className='h-10 w-10' resizeMode='cover'

                    />
                </TouchableOpacity>
                <TouchableOpacity className='mb-2  px-5 mx-1 rounded-md' onPress={() => handlePress('TikTok')}>
                    <Image source={require('../../../assets/images/tiktok.png')}
                        className='h-9 w-9' resizeMode='cover'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const handlePress = (socialMedia) => {
    let url = '';
    switch (socialMedia) {
        case 'Facebook':
            url = 'https://www.facebook.com/municipiosr'; // Reemplaza con el enlace de tu página de Facebook
            break;
        case 'Instagram':
            url = 'https://www.instagram.com/larry_vite_cevallos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; // Reemplaza con el enlace de tu página de Instagram
            break;
        case 'TikTok':
            url = 'https://www.tiktok.com/@larry_vite_cevallos'; // Reemplaza con el enlace de tu página de TikTok
            break;
        default:
            return;
    }
    Linking.openURL(url).catch(err => console.error('Error al abrir la URL:', err));
};

