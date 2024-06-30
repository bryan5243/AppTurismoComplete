import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, Linking, Modal, TouchableHighlight } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { ArrowLongRightIcon } from "react-native-heroicons/solid";
import MapView, { Marker } from 'react-native-maps';
import Footer from './Footer';
import Hospedaje from './Hospedaje';
import Gastronomia from './Gastronomia';
import { Api } from '../../services/api'


export default function Details({ route }) {
    const navigation = useNavigation();

    const { place } = route.params;
    const [imageURLs, setImageURLs] = useState([]);
    const windowWidth = Dimensions.get('window').width; // Ancho de la ventana
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const endpoint = `/fotos?id_sitio=${place.id}`;
                const result = await Api.get(endpoint);
                const data = result.data;
                const urls = data.map(photo => `data:image/jpeg;base64,${photo.imagen}`);
                setImageURLs(urls);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };


        fetchImageData();

    }, [place.id]);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };


    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
        Linking.openURL(url);
    };






    return (
        <ScrollView className=' flex-1 justify-end"'>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', flex: 1, left: 16, paddingTop: 35, zIndex: 1 }}>
                <ArrowLeftIcon width={30} height={30} color="white" />
            </TouchableOpacity>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {imageURLs.map((url, index) => (
                    <Image key={index} source={{ uri: url }} style={{ width: windowWidth, height: 300 }} />
                ))}
            </ScrollView>
            <View style={{ paddingHorizontal: 20, paddingTop: 5 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, justifyContent: 'center', textAlign: 'center' }}>{place.nombre}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Información  </Text>
                    <ArrowLongRightIcon style={{ paddingLeft: 10 }} width={30} height={30} color="black" />
                </View>
                {/* <Text style={{ marginBottom: 10 }}>{place.ubicacion}</Text> */}
                {showFullDescription ? (
                    <Text style={{ textAlign: 'justify' }}>{place.descripcion}</Text>
                ) : (
                    <Text style={{ textAlign: 'justify' }} >
                        {place.descripcion.substr(0, 450)}
                        {place.descripcion.length > 450 && '... '}
                        <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={toggleModal}>
                            Mostrar más
                        </Text>
                    </Text>
                )}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', height: 200 }}>
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={{ textAlign: 'justify' }}>{place.descripcion}</Text>
                            </ScrollView>
                            <TouchableHighlight
                                onPress={toggleModal}
                                style={{ marginTop: 20, backgroundColor: 'lightgrey', padding: 10, borderRadius: 5 }}
                            >
                                <Text style={{ textAlign: 'center' }}>Cerrar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <View style={{ height: 300, paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Ubicación  </Text>
                        <ArrowLongRightIcon style={{ paddingLeft: 10 }} width={30} height={30} color="black" />
                    </View>
                    <TouchableOpacity onPress={openGoogleMaps} style={{ flex: 1 }}>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: place.latitude,
                                longitude: place.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                                title={place.nombre}
                                description={place.ubicacion}
                            />
                        </MapView>
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center pt-3'>
                    <Text className='font-bold text-base'>Gastronomía  </Text>
                    <ArrowLongRightIcon className='pl-3' width={30} height={30} color="black" />
                </View>
                <Gastronomia placeId={place.id} />
                <View  className='flex-row items-center pt-1 '>
                    <Text  className='font-bold text-base'>Hospedajes </Text>
                    <ArrowLongRightIcon className='pl-3' width={30} height={30} color="black" />

                </View>
                <Hospedaje placeId={place.id}  />
            </View>
            <Footer />

        </ScrollView>
    );
}
