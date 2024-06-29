import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MyStack from './App/Navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <MyStack/>
    </NavigationContainer>
  );
}


