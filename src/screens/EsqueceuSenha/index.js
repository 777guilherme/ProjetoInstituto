import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import logo from "../../../src/assets/Logo.png";

export default function EsqueceuSenha({ navigation }) {
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
        <Text style={styles.texto}>Redefina sua senha.</Text>
      </View>
      <View  style={styles.welcome}>
        <Text style={styles.texto1}>Enviaremos um email com mais informações para redefinição da sua senha.</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.inputEmail}
          placeholder=" Digite seu Email "
          placeholderTextColor="#FFF"
        />
        
      </View>

      <View style={styles.botaoCadastrar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textbotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.botaoVoltar}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.voltarLogin} >Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DD0836",
    marginTop: 25,
  },
  containerDescricao: {
    paddingVertical: 10,
  },
  separador: {
    width: 150,
    borderWidth: 1.5,
    borderColor: "#fff",
    marginTop: 70,
    marginBottom: 65,
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 40,
  },
  containerTexto: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    fontSize: 33,
    fontWeight: "bold",
    color: "white",
  },
  texto1:{
    fontSize: 18,
    color: '#FFF',
    marginTop: 70,
    textAlign: 'center'

  },
  welcome: {
    marginLeft: 15,
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    fontSize: 15,
    color: "#FFF",
    borderWidth: 1,
    width: 350,
    height: 40,
    marginTop: 30,
    borderColor: "#FFF",
  },
  botaoCadastrar: {
    marginTop: 30,
    backgroundColor: "#FFF",
    width: 270,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 65,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
  },
  textbotao: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 17,
  },
  botaoVoltar: {
      fontSize: 30,
      alignItems: 'center',
      marginTop: 20,
      color: '#FFF'
  },
  voltarLogin: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 0
  }
    
});
