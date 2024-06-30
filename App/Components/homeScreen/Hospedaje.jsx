import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Api } from '../../services/api';


const Hospedaje = ({ placeId }) => {
    const [hospedajeData, setHospedajeData] = useState([]);

    useEffect(() => {
        const fetchHospedajeData = async () => {
            try {
                const endpoint = `/hospedaje?id_sitio=${placeId}`;
                const result = await Api.get(endpoint);
                const data = result.data;
                setHospedajeData(data);
            } catch (error) {
                console.error('Error fetching hospedaje data:', error);
            }
        };


        fetchHospedajeData();
    }, [placeId]);

    return (
        <View className='flex-1 pb-4'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {hospedajeData.map((item, index) => (
                    <View key={index} className='mr-4'>
                        <Image source={{ uri: `data:image/jpeg;base64,${item.imagen}` }} className='w-40 h-40 rounded-2xl' resizeMode='cover' />
                        <Text className='mt-1 text-center font-semibold'>{item.nombre}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    hospedajeItem: {
        marginRight: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    name: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Hospedaje;
