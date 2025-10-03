import { recetasCaribe } from '@/store/recetas.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const RecetasScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recetasCaribe}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recetaCard}>
            <Text style={styles.nombre}>{item.nombre}</Text>
 
            <Text style={styles.subtitulo}>Descripción</Text>

            <Text style={{...styles.texto, fontFamily: 'Lato-Italic'}}>{item.descripcion}</Text>

            <Text style={styles.texto}>
              <Text style={{ fontFamily: 'Lato-Bold', color: '#ffa947ff' }}>Ubicación: </Text>
              <Text style={{ fontFamily: 'Lato-Regular' }}>{item.ubicacion}</Text>
            </Text>

            <Text style={styles.texto}>
              <Text style={{ fontFamily: 'Lato-Bold', color: '#ffa947ff' }}>Región: </Text>
              <Text style={{ fontFamily: 'Lato-Regular' }}>{item.region}</Text>
            </Text>

            
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Lato-Regular',
  },
  recetaCard: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nombre: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: 'Lato-Black',
  },
  subtitulo:{
    fontSize: 18,
    marginTop:10,
    marginBottom: 6,
    fontFamily: 'Lato-Bold',
    color: '#ffa947ff',

  },
  texto: {
    fontSize: 17,
    marginBottom: 12,
    fontFamily: 'Lato-Regular',
  },
  imagen: {
    width: '100%',
    height: 192,
    borderRadius: 12,
    marginVertical: 8,
  },
  linkContainer: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
  link: {
    color: '#3108feff',
    fontSize: 17,
    marginTop: 6,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-Regular',
  },
});

export default RecetasScreen;
