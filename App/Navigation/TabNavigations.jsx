// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from '../View/Home';
// import Cronograma from '../View/Cronograma';
// import Mapa from '../View/Mapa';
// import Profile from '../View/Profile';
// import Favoritos from '../View/Favoritos';
// import { Ionicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();



// export default function TabNavigations() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShow: false }}>
//       <Tab.Screen name="Home" component={HomeScreen}
//         options={{
//           tabBarLabel: 'Inicio',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="home" color={color} size={25} />
//           ),
//         }} />
//       <Tab.Screen name="Cronograma" component={Cronograma}
//         options={{
//           tabBarLabel: 'Cronograma',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="calendar" color={color} size={25} />

//           ),
//         }}
//       />


//       <Tab.Screen name="Mapa" component={Mapa}
//         options={{
//           tabBarLabel: 'Mapa',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="map" color={color} size={25} />

//           ),
//         }}
//       />
//       <Tab.Screen name="Favorito" component={Favoritos}
//         options={{
//           tabBarLabel: 'Favoritos',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="heart" color={color} size={25} />

//           ),
//         }}
//       />

//       <Tab.Screen name="Proile" component={Profile}
//         options={{
//           tabBarLabel: 'Perfil',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="person" color={color} size={25} />

//           ),
//         }}
//       />


//     </Tab.Navigator>

//   )
// }
