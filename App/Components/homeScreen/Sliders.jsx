import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
const screenWidth = Dimensions.get('window').width;

export default function Sliders({ listasliders }) {
    return (
        <View className='mt-0'>
            <FlatList
                data={listasliders}
                horizontal={true}
                pagingEnabled={true} // Esta propiedad permite el deslizamiento de página a página
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: screenWidth }} className='w-full'>
                        <Image
                            source={{ uri: item.imagen }}
                           className='w-full h-48 object-top ' resizeMode='cover'  // Establece el ancho al 100% del contenedor, altura fija y ajuste de la imagen
                        />
                    </View>
                )}
            />
        </View>
    );
}