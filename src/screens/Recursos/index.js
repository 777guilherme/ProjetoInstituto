import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import logo from "../../../src/assets/Logo.png";
import home from "../../../src/assets/ICONE-CASA.png";


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container2}>
                <View style={styles.welcome}>
                    <Text style={styles.titulo}>Doe Dinheiro</Text>
                </View>
                <View style={styles.welcome}>
                    <Text style={styles.texto}>Colabore e faça sua contribuição se mutiplicar em sorrisos.</Text>
                </View>

                <View style={styles.Pix}>
                    <TouchableOpacity >
                        <Text style={styles.textbotao}>Pix do Instituto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.welcome}>
                    <Text style={styles.titulo3}>Ou</Text>
                </View>

                <View style={styles.welcome}>
                    <Text style={styles.titulo2}>Doe recursos</Text>
                </View>
                <View style={styles.welcome}>
                    <Text style={styles.texto2}>Quer desapegar de alguma roupa ou objeto? Você nos entrega, que encaminhamos para quem precisa.</Text>
                </View>

                <View style={styles.Endereco}>
                    <TouchableOpacity >
                        <Text style={styles.textbotao}>Rua Ribeiro do vale, 948
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={home} style={styles.home} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container1: {
        height: 75,
        backgroundColor: '#DD0836',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 30,
        alignItems: 'center',


    },
    container3: {
        height: 60,
        backgroundColor: '#DD0836',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 70,
        height: 70,
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: 10,

    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20

    },
    titulo2: {
        marginTop: 4,
        fontSize: 40,
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20

    },
    home: {
        width: 43,
        height: 43
    },
    Pix: {
        backgroundColor: "#6854AD",
        height: 50,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 45
    },
    Endereco: {
        backgroundColor: "#6854AD",
        height: 50,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15
    },
    textbotao: {
        color: "#FFF",
        fontSize: 20,
        justifyContent: 'center',
        marginTop: 9

    },
    titulo3: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20

    }



})