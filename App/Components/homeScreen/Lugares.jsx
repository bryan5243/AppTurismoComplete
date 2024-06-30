import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar hook de navegación

const screenWidth = Dimensions.get('window').width;

const Lugares = ({ listalugares }) => {
    const navigation = useNavigation(); // Obtener la instancia de navegación

    const handlePlacePress = (place) => {
        navigation.navigate('Details', { place }); // Navegar al detalle del lugar al hacer clic
    };

    return (
        <View style={{ flex: 1 }} >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }} // Alinea los elementos al centro verticalmente
            >
                {listalugares.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePlacePress(item)} className='flex-1  mb-3'>
                        <View style={{ width: screenWidth, marginTop: 10, alignItems: 'center' }}>
                            <Image
                                className="rounded-lg w-[60%] h-64 self-center" resizeMode='cover'
                                source={{ uri: item.imagen }}
                              
                            />
                            <Text  className='text-center text-base font-semibold'>{item.nombre}</Text>
                            <Text className='text-center text-base font-semibold mt-[-1%]'>{item.ubicacion}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Lugares;
