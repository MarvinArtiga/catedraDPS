import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ProfesoresInicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, styles.absoluteHeader]}>
        <Text style={styles.headerText}>Nombre de la Institución</Text>
      </View>
      <View style={styles.contentContainer}>
        {/* Contenedor del icono de usuario */}
        <View style={[styles.userContainer, styles.border, styles.userIconContainer]}>
          <View style={[styles.userIcon, styles.iconStyle]}></View>
        </View>
        {/* Contenedor de la información del profesor */}
        <View style={[styles.userInfoContainer, styles.border]}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTitle}>Datos del profesor</Text>
            <Text>CARNET:</Text>
            <Text>NOMBRE:</Text>
            <Text>GUIA DE GRADO:</Text>
            <Text>CORREO:</Text>
            <Text>TELÉFONO:</Text>
          </View>
        </View>
      </View>
      {/* Botón de "Estudiantes" */}
      <TouchableOpacity
        style={[styles.button, styles.border]}
        onPress={() => navigation.navigate('PantallaEstudiantes')}
      >
        <Text style={styles.buttonText}>Estudiantes</Text>
      </TouchableOpacity>
      {/* Espacio para la tabla de horario de clases */}
      <View style={[styles.scheduleTable, styles.border]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  headerContainer: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteHeader: {
    position: 'absolute',
    top: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20,
    width: '90%',
  },
  userContainer: {
    width: '100%',
    height: 100,
    marginBottom: 0,
  },
  userIconContainer: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  userInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  userInfo: {},
  userInfoTitle: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: '40%',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scheduleTable: {},
  border: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ProfesoresInicio;
