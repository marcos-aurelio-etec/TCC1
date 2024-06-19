import React from "react";
import {Image, Text, View , StyleSheet, TouchableOpacity, } from 'react-native';
import Sobre from "./sobre";



export default function App() {
    const [page, setPage] = React.useState('home');


    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                <Image source={require("./img/embora.png")}/>

                <Text style={styles.title}>Saiba onde você  e seus dispositivo se localizam!</Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Começe Agora</Text> 
                </TouchableOpacity>
                
                <Text style={styles.text}>Veja a localização exata do seu aparelho em um mapa!</Text>
                
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
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 150,
        marginLeft: 50,
    },
    button: {
        backgroundColor: '#09B451',
        padding: 10,
        borderRadius: 5,
        marginBottom: 0,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 150,
        marginLeft: 50,
    }
  });