import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useState } from 'react';


export default function Cadastro() {

    const [email, setEmail] = useState(null)
    const [nome, setnome] = useState(null)
    const [sobrenome, setsobrenome] = useState(null)
    const [senha, setsenha] = useState(null)

    const Ok = () =>{
        console.log('foi')
        console.log(email)
        console.log(nome)
        console.log(sobrenome)
        console.log(senha)
    }


    return(
        
    <View style={styles.container} >
        <Image style={styles.imagems} source={require('../assets/aaa.jpg')}  />
        <Text style={styles.titulo} >Cadastro de Usuario</Text>
        <Text></Text>
        <TextInput
        style={styles.textinput}
        placeholder='Nome'
        keyboardType='default'
        onChangeText={valor => setnome(valor)}
         />
         <TextInput
        style={styles.textinput}
        placeholder='Sobrenome'
        keyboardType='default'
        onChangeText={valor => setsobrenome(valor)}
         />
         <TextInput
        style={styles.textinput}
        placeholder='E-mail'
        keyboardType='email-address'
        onChangeText={valor => setEmail(valor)}
         />
         <TextInput
        style={styles.textinput}
        placeholder='Senha'
        keyboardType='visible-password'
        onChangeText={valor => setsenha(valor)}

         />
        <TouchableOpacity
        style={styles.botao}
        onPress={Ok}
        >
        <Text style={styles.texto}>Cadastro</Text>
        </TouchableOpacity>

    </View>
    );

    

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#efeded',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        color:'#fff',
        fontWeight: "bold",
      },
    titulo:{
        color: '#000000',
        fontSize: 33,
        paddingTop: 30,
      },
      subtitulo:{
        color: '#000000',
        fontSize: 18,
        paddingTop: 10,

      },
      imagems:{
        height: 300,
        width: 300,
        borderRadius:150,
      },
      textinput:{
        width: 300,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        padding:10,
        margin:3,
      },
      esenha:{
        alignItems: 'center',
        paddingTop: 20,
        fontWeight: "bold",
    
      },
      botao: {
        backgroundColor: '#341c86',
        color: '#fff',
        alignItems: 'center',
        width:300,
        padding: 8,
        borderRadius: 5,
        margin:10,
      },
});


