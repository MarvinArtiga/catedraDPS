import { initializeApp } from "firebase/app";
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { firebaseConfig } from "./firebase-config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LoginScreen } from "./screen/LoginScreen";
// import { AddStudentScreen } from "./screen/addStudentScreen";




// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//homescreen aqui pueden agregar las demas vistas 
function HomeScreen (){
  return(
    <View>
      <Text>hey jou wasup</Text>
    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

