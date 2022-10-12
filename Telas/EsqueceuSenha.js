import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


export default function EsqueceuSenha() {

    const [email, setEmail] = useState(null)

    const Ok = () =>{
        console.log('foi')
        console.log(email)

    }

    return(
    <View  style={styles.container}>
        <Image style={styles.imagems} source={require('../assets/aaa.jpg')}  />
        <Text style={styles.titulo} >EsqueceuSenha</Text>
        <Text></Text>
        <TextInput
        style={styles.textinput}
        placeholder='Digite seu E-Mail Para Recuperar'
        keyboardType='email-address'
        onChangeText={valor => setEmail(valor)}
         />
        <TouchableOpacity 
        style={styles.botao}
        onPress={Ok}
        >
            <Text style={styles.texto}>Recuperar Senha</Text>
        </TouchableOpacity>

    </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efeded',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagems:{
      height: 300,
      width: 300,
      borderRadius:150,
    },
    botao: {
      backgroundColor: '#341c86',
      color: '#fff',
      alignItems: 'center',
      padding: 8,
      borderRadius: 5,
      width:300,
    },
    texto: {
      color:'#fff',
      fontWeight: "bold",
    },
    textinput:{
      width: 300,
      height: 40,
      borderRadius: 15,
      backgroundColor: '#fff',
      padding:10,
      margin: 25,
    },
    esenha:{
      alignItems: 'center',
      paddingTop: 20,
      fontWeight: "bold",
  
    },
    titulo:{
      color: '#000000',
      fontSize: 33,
      fontWeight: "bold",
      paddingTop: 30,
    },
    subtitulo:{
      color: '#000000',
      fontSize: 18,
      
    },
    toucheb:{
      paddingBottom: 10,
    },
  });