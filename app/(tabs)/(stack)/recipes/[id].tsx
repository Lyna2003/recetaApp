import { recetasCaribe } from '@/store/recetas.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const RecetasScreen = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const receta = recetasCaribe.find((p)=> p.id == id)

      useEffect(() => {
      navigation.setOptions({
        title: 'Receta ' + (receta?.nombre ?? 'Receta')
      })
    }, [receta])


    if(!receta){
        return<Redirect href='/' />
    }



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.nombre}>{receta.nombre}</Text>

     <Text style={styles.subtitulo}>Ingredientes</Text>

      <View style={styles.ingredientesContainer}>
        {receta.ingredientes.split(',').map((ingrediente, index) => (
          <Text key={index} style={styles.ingrediente}>
            • {ingrediente.trim()}
          </Text>
        ))}
      </View>

         <Text style={styles.texto}>
           <Text style={{ fontFamily: 'Lato-Bold', color: '#ffa947ff' }}>Tiempo de preparación: </Text>
           <Text style={{ fontFamily: 'Lato-Regular' }}>{receta.tiempoPreparacion}</Text>
          </Text>
       
          <Text style={styles.texto}>
            <Text style={{ fontFamily: 'Lato-Bold', color: '#ffa947ff' }}>Porciones: </Text>
            <Text style={{ fontFamily: 'Lato-Regular' }}>{receta.porciones}</Text>
          </Text>

          <Text style={styles.subtitulo}>Pasos:</Text>

          <View style={styles.ingredientesContainer}>
            {receta.pasos.map((paso, index) => (
              <Text key={index} style={{...styles.ingrediente, fontFamily: 'Lato-Italic'}}>
                {index + 1}. {paso}
              </Text>
            ))}
          </View>      

      <Image
        source={receta.imagen}
        style={styles.imagen}
        resizeMode="cover"
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  nombre: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
    marginBottom: 12,
    color: '#333',
  },
  ingredientesContainer: {
    marginBottom: 12,
  },
  subtitulo:{
    fontSize: 18,
    marginTop: 6,
    marginBottom: 4,
    fontFamily: 'Lato-Bold',
    color: '#ffa947ff',
    lineHeight: 22,
  },
  ingrediente: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Lato-Regular',
  },
  texto: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'Lato-Regular',
    paddingTop: 4,
  },
  imagen: {
    width: '100%',
    height: 192,
    borderRadius: 12,
    marginVertical: 12,
  },
});

export default RecetasScreen