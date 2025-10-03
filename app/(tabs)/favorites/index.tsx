import { recetasCaribe } from '@/store/recetas.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {

  const favoritas = recetasCaribe.filter(r => r.id === '2' || r.id === '3')

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recetaCard}>
            <Text style={styles.nombre}>{item.nombre}</Text>

            <Image
              source={item.imagen}
              style={styles.imagen}
              resizeMode="cover"
            />

            <View style={styles.linkContainer}>
              <Link href={`/recipes/${item.id}`} style={styles.link}>
                Ver receta
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#facd74ff',
  },
  recetaCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  nombre: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    marginBottom: 10,
  },
  imagen: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  linkContainer: {
    marginTop: 5,
  },
  link: {
    fontSize: 16,
    color: '#3108feff',
    fontFamily: 'Lato-Bold',
  },
})


export default FavoritesScreen