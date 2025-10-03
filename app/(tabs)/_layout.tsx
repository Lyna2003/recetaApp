import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#fc8917ff',
      tabBarInactiveTintColor: '#8d8c8cff',
      headerShadowVisible: false,
      sceneStyle: {backgroundColor: 'orange'},
      headerStyle: { backgroundColor: '#fc8917ff',  },
      headerTitleStyle: { fontFamily: 'Lato-Bold', fontSize: 18, color: '#fff' },

     }}>
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name='(stack)'
        options={{
          headerShown: false,
          title: 'Recetas',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
        }}
      />



    </Tabs>

   

  )
}

export default TabsLayout