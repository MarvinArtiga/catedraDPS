import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TextInput,TouchableOpacity } from "react-native";

const uri = 'https://w0.peakpx.com/wallpaper/141/881/HD-wallpaper-blue-background-gradient-thumbnail.jpg';
const profilePicture = 'https://png.pngtree.com/png-clipart/20211017/original/pngtree-logo-school-with-book-and-star-png-image_6855379.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <BlurView intensity={90} style={styles.blurView}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture}/>
            <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} placeholder="Enter E-Mail"/> 
            </View>
            <View>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry/>
            </View>
            <TouchableOpacity style={[styles.buton, {backgroundColor:'#00CFEB90',}]}>
              <Text style={{fontSize:17,fontWeight:'400',color:'white',}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buton, {backgroundColor:'#EA9E21',}]}>
              <Text style={{fontSize:17,fontWeight:'400',color:'white',}}>Create Account</Text>
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
    backgroundColor:'fffff90',
    marginBottom:20,
  },
  buton:{
    width:250,
    height:40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderBlockColor:'#fff',
    borderWidth:1,
  }
});
