import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import logo from "../../../src/assets/Logo.png";
import home from "../../../src/assets/ICONE-CASA.png";
import dinheiro from "../../../src/assets/dinheiro.png";
import relogio from "../../../src/assets/relogio.png";
import interrogacao from "../../../src/assets/interrogacao.png";
import recicle from "../../../src/assets/recicle.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.container2}>
        <View style={styles.slogan}>
          <Text style={styles.titulo}>Seja nosso apoiador</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.containerCards}>
            <TouchableOpacity onPress={() => navigation.navigate("Tempo")}>
              <Image source={relogio} style={styles.relogio} />
              <Text style={styles.tituloCard}>Doe Tempo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCards}>
            <TouchableOpacity onPress={() => navigation.navigate("Recursos")}>
              <Image source={dinheiro} style={styles.dinheiro} />
              <Text style={styles.tituloCard}>Doe Recursos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.containerCards}>
            <TouchableOpacity onPress={() => navigation.navigate("Projetos")}>
              <Image source={recicle} style={styles.recicle} />
              <Text style={styles.tituloCard}>Nossos Projetos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCards}>
            <TouchableOpacity onPress={() => navigation.navigate("QuemSomos")}>
              <Image source={interrogacao} style={styles.interrogacao} />
              <Text style={styles.tituloCard}>Quem Somos?</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 30,
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
  dinheiro: {
    width: 90,
    height: 70,
    marginLeft: 15
  },
  recicle: {
    width: 90,
    height: 75,
    marginLeft: 25
  },
  interrogacao: {
    width: 80,
    height: 80,
    marginLeft: 25
  },
  relogio: {
    width: 70,
    height: 70,
    marginLeft: 15
  },
  home: {
    width: 43,
    height: 43
  },
  titulo: {
    fontSize: 35,
    color: "#DD0836",
    fontWeight: 'bold'
  },
  tituloCard: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 20
  },
  slogan: {
    alignItems: 'center'
  },
  card: {
    marginTop: 60,
    flexDirection: 'row'
  },
  containerCards: {
    backgroundColor: "#6854AD",
    width: 160,
    height: 160,
    borderRadius: 15,
    marginLeft: 23,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    shadowColor: "#000"
  },
})