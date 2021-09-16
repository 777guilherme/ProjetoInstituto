import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function Login({ navigation }) {
    const [senha, setSenha] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDescricao}>
                <View style={styles.containerTexto}>
                    <View style={styles.separador} />
                    <Image source={logo} style={styles.logo} />
                    <View style={styles.separador} />

                </View>
            </View>
            <View style={styles.welcome}>
                <Text style={styles.texto}>
                    Bem Vindo ao
                </Text>
                <Text style={styles.texto1}>
                    Instituto Bira Padilha
                </Text>
            </View>
            < View style={styles.inputs}>
                <TextInput
                    style={styles.inputCPF}
                    placeholder="Digite seu CPF ou Email"
                    placeholderTextColor="#FFF"
                />
            </View>
            <View style={styles.inputs} >
                <TextInput
                    style={styles.inputSenha}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#FFF"
                    onChangeText={(texto) => setSenha(texto)}
                />
                <TouchableOpacity style={styles.icon}>
                    <Ionicons nome="eye" color="#FFF" size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.Cadastrar}>
                <Text style={styles.texto3}>Não tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={{ marginLeft: 5, color: '#FFF', fontWeight: 'bold' }}>Cadastre-se</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.botaoEntrar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DD0836",
    },
    containerDescricao: {
        paddingVertical: 10
    },
    separador: {
        width: 150,
        borderWidth: 1.5,
        borderColor: "#fff",
        marginTop: 70,
        marginBottom: 65
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 40
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'white',
    },
    texto1: {
        fontSize: 33,
        color: 'white',
        marginTop: 7,
    },
    welcome: {
        marginLeft: 15,
    },
    inputs: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350
    },
    inputCPF: {
        fontSize: 15,
        color: '#FFF',
        borderWidth: 1,
        height: 40,
        marginTop: 160,
        borderColor: '#FFF'
    },
    inputSenha: {
        fontSize: 15,
        borderWidth: 1,
        width: '85%',
        height: 40,
        marginTop: 40,
        borderColor: '#FFF',
        flexDirection: 'row'

    },
    botaoEntrar: {
        marginTop: 80,
        backgroundColor: '#FFF',
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 65,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000'
    },
    Cadastrar: {
        marginTop: 10,
        marginRight: 30,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        color: '#FFF'
    },
    texto3: {
        color: '#FFF',
    },
    icon: {
        width: '15%',
        height: 50,

    }




})








