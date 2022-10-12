import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


 



export default function Login({navigation}) {

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    const entrar = () => {
      console.log('entrou');
      console.log(email);
      console.log(senha);
    }

      
    return(
        <View style={styles.container}>
        <StatusBar hidden />
        <View >
        <Image style={styles.imagems} source={require('../assets/aaa.jpg')}  />
        <Text style={styles.titulo} >Olá, Seja Bem Vindo</Text>
        <Text 
        style={styles.subtitulo}>
        Usuario</Text>

        <TextInput
        style={styles.textinput} 
        placeholder='Email'
        onChangeText={valor => setEmail(valor)}
        keyboardType='email-address'
         />
        <Text 
        style={styles.subtitulo}>
        Senha</Text>
        <TextInput 
        style={styles.textinput}
        placeholder='Senha'
        onChangeText={valor => setSenha(valor)}
        keyboardType='visible-password'
         />
        <Text></Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress={entrar}
        >
          <Text style={styles.texto} >Login</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.texto} >Cadastro</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={styles.esenha}
        onPress={() => navigation.navigate('EsqueceuSenha')}
        >
        <Text >Esqueceu Senha</Text>
        </TouchableOpacity>
        
        </View>
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

