import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
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
    }
})

