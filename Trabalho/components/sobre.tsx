import React from "react";
import { Text, View , StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Home from "./home";

export default function App() {
    const [page, setPage] = React.useState('sobre');


    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Image source={require("./img/embora.png")}/>

                    <Image source={require("./img/Vector.jpg")}/>

                <Text style={styles.title}>Localização <Text style={styles.spam}>Atual</Text></Text>

                <Image style={styles.img}source={require("./img/mapa.png")}/>

                <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                    <Text style={styles.buttonText}>Home</Text> 
                </TouchableOpacity>

                <Image source={require("./img/footer2.png")}/>
                
                </View>
                
            );
                
    } else if (page === 'home')  {
        return <Home />;
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
          fontSize: 28,
          fontWeight: 'bold',
          color: '#000',
          marginBottom: 150,
          marginLeft: 0,
          
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
    },
    img: {
        marginBottom:30,
        marginTop: -110,
    },
    spam: {
        color: '#09B451',
    }
  });
