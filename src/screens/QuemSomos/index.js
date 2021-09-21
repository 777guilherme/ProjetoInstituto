import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import logo from "../../../src/assets/Logo.png";
import home from "../../../src/assets/ICONE-CASA.png";
import instituto from "../../../src/assets/instituto.png";

export default function QuemSomos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.container2}>
        <View style={styles.slogan}>
          <Text style={styles.titulo}>Somos o</Text>
          <Text style={styles.titulo}>Instituto Bira Padilha</Text>
          <Text style={styles.descricao}>
            Nascemos da vontade de ajudar pessoas, sem distinção. Nascemos em
            2016 com distribuição mensal de 50 cestas básicas à famílias menos
            favorecidas, e desde então estamos crescendo a cada mês com a ajuda
            de voluntários e doações de parceiros. Nossa missão é oferecer
            sombra e frutos a todos que se aproximam, de maneira assistencial ou
            não. Com o crescimento das nossas raízes, estamos cada vez mais
            firmes no propósito de ajudar e confiantes de que bons ventos ainda
            nos farão florir em muitos campos.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={home} style={styles.home} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 25,
  },
  container1: {
    height: 75,
    backgroundColor: "#DD0836",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 30,
  },
  container3: {
    height: 60,
    backgroundColor: "#DD0836",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
  },
  home: {
    width: 43,
    height: 43,
  },
  slogan: {
    marginTop: 20,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 30,
    color: "#DD0836",
    fontWeight: "bold",
  },

  descricao: {
    marginTop: 25,
    width: 370,
    textAlign: "justify",
    fontSize: 19,
    fontWeight: "bold",
  },
});
