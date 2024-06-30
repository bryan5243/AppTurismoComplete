import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View className='items-center justify-center bg-[#1527b1] ' >
            <Image
                source={require('../../assets/images/header.png')}
                className="h-20 mt-5"
                resizeMode="contain"
            />
        </View>
    )
}