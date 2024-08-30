import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import Sobre from "./sobre";
import Home from "./home";

export default function Principal() {

    const [page, setPage] = React.useState('principal');


    const renderPage = () => {
        if (page === 'principal') {
            return (

               
                    
                <View style={styles.container}>
                    
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Folder da marca</Text>
                        </View>
                        <View style={styles.content}>
                        </View>
                    </View>
                    <Text style={styles.text}>Barbearia Franco</Text>
                    <View style={styles.fotos}>
                    <Image 
                     source={{ uri: 'https://picsum.photos/200/300' }}
                        style={{ width: 100, height: 100 }}
                        />
                     <Image
                        source={{ uri: 'https://picsum.photos/200/301' }}
                     style={{ width: 100, height: 100 }}
                        />
                     <Image
                     source={{ uri: 'https://picsum.photos/200/302' }}
                     style={{ width: 100, height: 100,  }}
                         />
                    </View>




                    <Text style={styles.title}>legal</Text>


                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>CorteFy</Text>
                    </TouchableOpacity>


                </View>

            );
        } else if (page === 'home') {
            return <Home />;
        }
    };
    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#91D9E6',
        flex: 1,
        


    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 150, // Margem abaixo do texto superior



    },
    button: {
        backgroundColor: '#003818',
        padding: 10,
        borderRadius: 5,
        marginBottom: 50, // Margem abaixo do texto superior
        marginTop: 0,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 120,
        marginRight: 120,
        
    },
    image: {
        flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      width: '100%',
      height: 200,
      backgroundColor: '#91D9E6',
      padding: 10,

      

    },

    header: {
        backgroundColor: '#C8BB64',
        padding: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    fotos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#f2f2f2',
        padding: 10,
        
    },

    box: {
        width: 200,
        height: 200,
        backgroundColor: '#000',
      },

    
});
