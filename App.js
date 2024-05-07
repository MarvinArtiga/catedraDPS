import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screen/LoginScreen";
import { Home } from "./screen/Home";
import { Alumnos } from "./screen/Alumnos";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={LoginScreen}/>
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name="Logup" component={LoginScreen} />
  <Stack.Screen name="Alumnos" component={Alumnos} />
</Stack.Navigator>

    </NavigationContainer>
  );
}
