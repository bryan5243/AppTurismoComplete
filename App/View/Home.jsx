import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Api } from '../services/api'
import Header from '../Components/Header'
import Sliders from '../Components/homeScreen/Sliders'
import Tipos from '../Components/homeScreen/Tipos'
import Lugares from '../Components/homeScreen/Lugares'
export default function Home() {


  const [listasliders, setListasliders] = useState([])
  // //llamado de la seccion categorias
  const [listacategorias, setcategorias] = useState([])
  // //llamado de la seccion categorias
  const [listalugares, setlugares] = useState([])

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const [loading, setLoading] = useState(true); // Estado para controlar la carga


  //obtener
  useEffect(() => {
    getsliders();
    getcategorias();
    getLugaresPorCategoria();

  }, []);

  //consulta de datos
  const getsliders = () => {
    const endpoint = "/sliders"; // Define el endpoint específico

    Api.get(endpoint)
      .then((result) => {
        const data = result.data;
        // Convertir los datos de la imagen de Blob a base64
        const newData = data.map(item => {
          return {
            ...item,
            imagen: `data:image/jpeg;base64,${item.imagen}`
          };
        });
        setListasliders(newData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const getcategorias = () => {
    const endpoint = "/categorias"; // Define el endpoint específico

    Api.get(endpoint)
      .then((result) => {
        const data = result.data;

        // Convertir los datos de la imagen de Blob a base64
        const newData = data.map((item) => ({
          ...item,
          imagen: `data:image/jpeg;base64,${item.imagen}`
        }));
        setcategorias(newData);
        // Llamar a getLugaresPorCategoria con la ID de la primera categoría
        if (newData.length > 0) {
          getLugaresPorCategoria(newData[0].id);
        }
      })
      .catch((error) => console.error('Error fetching categorias:', error));
  };
  const handleCategoriaSeleccionada = (categoriaId) => {
    setLoading(true);
    setCategoriaSeleccionada(categoriaId);
    getLugaresPorCategoria(categoriaId);
  };

  const getLugaresPorCategoria = (categoriaId) => {
    const endpoint = `/sitios?categoria_id=${categoriaId}`; // Utiliza comillas invertidas para template literals

    Api.get(endpoint)
      .then((result) => {
        const data = result.data;

        const newData = data.map((item) => ({
          ...item,
          imagen: `data:image/jpeg;base64,${item.imagen}`
        }));

        setlugares(newData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching lugares:', error);
        setLoading(false);
      });
  };


  return (
    <View className='flex-1'>
      <Header />
      <Sliders listasliders={listasliders} />
      <Tipos listacategorias={listacategorias} onCategoriaSeleccionada={handleCategoriaSeleccionada} />
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Lugares listalugares={listalugares} /> // Pasa todos los lugares y filtra dentro de Lugares.js
      )}
    </View>
  )
}
