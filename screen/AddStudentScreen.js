import { BlurView } from "expo-blur";
import { initializeApp } from "firebase/app";
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { firebaseConfig } from "../firebase-config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

//el fondo y la imagen de perfil
const uri = 'https://w0.peakpx.com/wallpaper/141/881/HD-wallpaper-blue-background-gradient-thumbnail.jpg';
const profilePicture = 'https://png.pngtree.com/png-clipart/20211017/original/pngtree-logo-school-with-book-and-star-png-image_6855379.png';

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function AddStudentScreen (){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('¡Tu cuenta ha sido creada con éxito!');
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error', error.message); // Manejar el error mostrando un mensaje al usuario
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('vaya ya estas signed');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error', error.message); // Manejar el error mostrando un mensaje al usuario
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <BlurView intensity={90} style={styles.blurView}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture}/>
            <View>
              <Text style={styles.label}>E-mail</Text>
              <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="Enter E-Mail" value={email}/> 
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Enter your password" secureTextEntry value={password}/>
            </View>
            {/* <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor:'#EA9E21',}]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor:'#EA9E21',}]}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollViewContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurView: {
    width: 350,
    height: 500,
    borderRadius: 10,
    padding: 10,
  },
  login: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical:30,
  },
  label: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
  input:{
    width:250,
    height:40,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    marginVertical:10,
    backgroundColor:'#fff',
    marginBottom:20,
  },
  button:{
    width:250,
    height:40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderWidth:1,
  },
  buttonText:{
    fontSize:17,
    fontWeight:'400',
    color:'white',
  }
});
