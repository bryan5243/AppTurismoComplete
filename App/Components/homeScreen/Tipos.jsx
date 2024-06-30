import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLongRightIcon } from 'react-native-heroicons/solid';

export default function Tipos({ listacategorias, onCategoriaSeleccionada }) {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
        onCategoriaSeleccionada(listacategorias[index].id); // Pasar solo el ID de la categoría seleccionada
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {listacategorias.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleItemPress(index)}
                        activeOpacity={0.5}
                        style={[
                            styles.itemContainer,
                            index === selectedItemIndex ? styles.selectedItem : null,
                        ]}
                    >
                        <Image source={{ uri: item.imagen }} className='h-11 w-11 rounded-lg' resizeMode='contain'/>
                        <Text className='text-center text-base font-semibold'>{item.tipo}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemContainer: {
        marginLeft: 15,
        marginRight: 30,
        opacity: 0.5, // Opacidad por defecto para todos los elementos
    },
    selectedItem: {
        opacity: 1, // Opacidad del elemento seleccionado
    },
   
    
});