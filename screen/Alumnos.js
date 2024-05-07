import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const uri = 'https://w0.peakpx.com/wallpaper/141/881/HD-wallpaper-blue-background-gradient-thumbnail.jpg';
const profilePicture = 'https://png.pngtree.com/png-clipart/20211017/original/pngtree-logo-school-with-book-and-star-png-image_6855379.png';

export function Alumnos  () {
  return (
    <View style={styles.container}>
        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
      <View style={styles.encabezado}>
        <View style={styles.encabezadoInterior}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png' }} style={styles.imagenPerfil} />
        </View>
      </View>
      <Text style={styles.titulo}>Datos del Estudiante</Text>
      <View style={styles.contenido}>
        <Text style={styles.datos}>Carnet:</Text>
        <Text style={styles.datos}>Nombre:</Text>
        <Text style={styles.datos}>Grado:</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Ver Horario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  encabezado: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  encabezadoInterior: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagenPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contenido: {
    alignItems: 'center',
  },
  datos: {
    color:'#fff',
    fontSize: 18,
    marginBottom: 10,
    
  },
  boton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

