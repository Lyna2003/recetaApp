import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
<View style={styles.container}>
     
      <Text style={styles.titulo}>Bienvenido a Recetas Caribe</Text>

      <Image
        source={require("../../../assets/imagenesCaribe/imagen-intro.webp")} 
        style={styles.imagen}
        resizeMode="cover"
      />


      <Text style={styles.subtitulo}>
        "Explora los platos típicos de la región y disfruta de su sabor."
      </Text>

     
      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push("/recipes")}
      >
        <Text style={styles.textoBoton}>Ver recetas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#facd74ff",
  },
  titulo: {
    fontSize: 28,
    fontFamily: "Lato-Black",
    textAlign: "center",
    marginBottom: 20,
    color: "#ffffffff",
  },
    imagen: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginVertical: 6,
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Lato-Italic",
    marginBottom: 40,
    color: "#333",
  },
  boton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
});
