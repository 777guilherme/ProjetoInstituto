import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    Switch,
    SafeAreaView
} from 'react-native';

import logo from "../../../src/assets/Logo.png";
import home from "../../../src/assets/ICONE-CASA.png";

export default function Tempo({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.container1}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.container2}>
                    <View style={styles.slogan}>
                        <Text style={styles.titulo}>Doe Tempo</Text>
                        <Text style={styles.titulo2}>Venha ser um de nossos voluntários</Text>
                    </View>
                    <View style={styles.slogan2}>
                        <Text style={styles.titulo3}>REGISTRE-SE:</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Digite seu nome completo"
                            placeholderTextColor="#B9B9B9"
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Digite seu telefone"
                            placeholderTextColor="#B9B9B9"
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Digite seu e-mail"
                            placeholderTextColor="#B9B9B9"
                        />
                    </View>
                    <View style={styles.selectArea}>
                        <Text style={styles.titulo4}>Como gostaria de atuar?</Text>
                        <View style={styles.switchArea}>
                            <Switch
                                style={styles.switch}
                            />
                            <Text style={styles.switchTxt}>
                                Montagem da Sacola do Bem - Onde: Brooklin | {"\n"}
                                Quando: terceira sexta feira do mês {"\n"}
                                - portas abertas
                            </Text>
                        </View>
                        <View style={styles.switchArea}>
                            <Switch
                                style={styles.switch}
                            />
                            <Text style={styles.switchTxt}>
                                Entrega da Sacola do Bem - Onde: Brooklin |  {"\n"}
                                Quando: primeira sexta feira do mês
                            </Text>
                        </View>
                        <View style={styles.switchArea}>
                            <Switch
                                style={styles.switch}
                            />
                            <Text style={styles.switchTxt}>
                                Ligar para beneficiários dos projetos - {"\n"}
                                Onde: de casa | Quando: última semana do mês
                            </Text>
                        </View>
                        <View style={styles.botaoEntrar}>
                            <TouchableOpacity>
                                <Text style={styles.textbotao}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={home} style={styles.home} />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 25
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
        marginTop: 25,
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
    home: {
        width: 43,
        height: 43
    },
    titulo: {
        fontSize: 30,
        color: "black",
        fontWeight: 'bold'
    },
    titulo2: {
        fontSize: 21,
        color: "black"
    },
    titulo3: {
        fontSize: 20,
        color: '#DD0836',
        fontWeight: 'bold'
    },
    titulo4: {
        fontSize: 18,
        color: "black",
        fontWeight: 'bold',
        marginLeft: 25
    },
    slogan: {
        marginLeft: 25
    },
    slogan2: {
        marginTop: 20,
        marginLeft: 25
    },
    inputArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        marginTop: 15,
    },
    inputs: {
        fontSize: 15,
        borderWidth: 1,
        width: "89%",
        height: 40,
        borderColor: '#DD0836',
        padding: 10,
        marginBottom: 17
    },
    switchArea: {
        marginTop: 20,
        flexDirection: 'row',

    },
    switch: {
        marginBottom: 8,
        marginLeft: 20
    },
    switchTxt: {
        fontSize: 13
    },
    textbotao: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 17
    },
    botaoEntrar: {
        marginTop: 23,
        backgroundColor: "#6854AD",
        width: 195,
        height: 43,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 90,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "#000",
    },
})

