import { Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

  const navigation = useNavigation();

  return (
  <Stack
  screenOptions={{
    headerShadowVisible: true,
    headerShown: true,
    headerStyle: {
      backgroundColor: '#fc8917ff', 
    },
    headerTitleStyle: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: '#fff', 
    },
    headerTintColor: '#fff', 
    contentStyle: {
      backgroundColor: 'white',
      alignContent: 'center',
    },
  }}
  >
    <Stack.Screen
    name='recipes/index'
    options={{
        title: 'Platos Típicos',
    }}
    />
  
  </Stack>


  )
}

export default StackLayout