import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
                    <View style={{ backgroundColor: 'gray', padding: 0, borderRadius: 80, borderWidth: 2, }}>
                        <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 80, borderWidth: 2, }}>
                            <Image
                                source={{
                                    uri: 'https://images.pexels.com/photos/933949/pexels-photo-933949.jpeg',
                                }}
                                style={{ width: 150, height: 200, borderRadius: 80, borderWidth: 1, }}
                            />
                            
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10, borderRadius: 100, borderWidth: 2,color: 'red', borderColor: 'red' }}>Barber Schop Franco</Text>




                    <Text style={styles.title}></Text>


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
        borderRadius: 100,
        borderWidth: 2,

    },

    box: {
        width: 200,
        height: 200,
        backgroundColor: '#000',
    },


});
