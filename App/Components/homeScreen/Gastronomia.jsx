import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Api } from '../../services/api';

const Gastronomia = ({ placeId }) => {
    const [gastronomiaData, setGastronomiaData] = useState([]);

    useEffect(() => {
        const fetchGastronomiaData = async () => {
            try {
                const endpoint = `/gastronomia?id_sitio=${placeId}`;
                const result = await Api.get(endpoint);
                const data = result.data;
                setGastronomiaData(data);
            } catch (error) {
                console.error('Error fetching gastronomia data:', error);
            }
        };


        fetchGastronomiaData();
    }, [placeId]);

    return (
        <View className='flex-1 p-2' >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {gastronomiaData.map((item, index) => (
                    <View key={index} className='mr-4'>
                        <Image source={{ uri: `data:image/jpeg;base64,${item.imagen}` }} className='w-40 h-40 rounded-2xl' resizeMode='cover' />
                        <Text className='mt-1 text-center font-semibold'>{item.nombre}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};



export default Gastronomia;
