import React from "react";
import {Image, Text, View , StyleSheet, TouchableOpacity, } from 'react-native';
import Sobre from "./sobre";



export default function App() {
    const [page, setPage] = React.useState('home');


    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>

                <Image style={styles.logo}source={require("./img/logo.png")}/>

                <Text style={styles.title}>Seja bem vindo à...</Text>
                    
             

                

                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>CorteFy</Text> 
                </TouchableOpacity>

                
                </View>
                
            );
        } else if (page === 'sobre')  {
            return <Sobre />;
        }
    };
    return <View style = {styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f0dd',
     
      
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 150, // Margem abaixo do texto superior
        

        
    },
    button: {
        backgroundColor: '#003818',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20, // Margem abaixo do texto superior
        marginTop: 0,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginLeft: 120,
        marginRight: 120,
        marginTop: 80,
    },
    img:{
        marginBottom: 20,
        marginTop: -200,
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
        
    },
    spam: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#003818',
        marginTop: -20, // Margem acima do texto inferior

    },
    
    logo: {
        width: 250, // Largura da imagem
        height: 250, // Altura da imagem
        marginTop: -80, // Margem acima da imagem
        marginBottom: 0,
    }

   
  });