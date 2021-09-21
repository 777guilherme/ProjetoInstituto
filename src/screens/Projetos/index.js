import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import logo from "../../../src/assets/Logo.png";
import home from "../../../src/assets/ICONE-CASA.png";
import img1 from "../../../src/assets/marmita.png";
import img2 from "../../../src/assets/Sacola.png";
import img3 from "../../../src/assets/mascara.png";

import Botao from "../../components/Botao";

export default function Projetos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.container2}>
        <View style={styles.slogan}>
          <Text style={styles.titulo}>Conheça nossos Projetos</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.bodyCard1}>
            <View style={styles.bodyCard2}>
              <Text style={styles.tituloCard}>Marmita Noturna</Text>
            </View>
            <View style={styles.bodyCard4}>
              <Text style={styles.textCard1}>
                A cada último sábado do mês, entregamos refeições, água, fruta,
                chocolate e roupas para pessoas em situação de rua.
                <Botao />
              </Text>
            </View>
            <Image source={img1} style={styles.imgEsquerda}></Image>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.bodyCard1}>
            <Text style={styles.tituloCard2}>Sacola do Bem</Text>
            <View style={styles.bodyCard5}>
              <Text style={styles.textCard2}>
                Na primeira terça-feira do mês, entregamos a Sacola do Bem à
                famílias e pessoas carentes previamente cadastradas.
              </Text>
              <Botao />
            </View>
            <Image source={img2} style={styles.imgDireita}></Image>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.bodyCard1}>
            <View style={styles.bodyCard3}>
              <Text style={styles.tituloCard}>Máscaras de Proteção</Text>
            </View>
            <View style={styles.bodyCard4}>
              <Text style={styles.textCard1}>
                Para ajudar na proteção contra o Covid-19, organizamos este
                projeto que alia a confecção de máscaras laváveis.
                <Botao />
              </Text>
            </View>
            <Image source={img3} style={styles.imgEsquerda}></Image>
          </View>
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
  titulo: {
    fontSize: 30,
    color: "#DD0836",
    fontWeight: "bold",
    marginBottom: 20,
  },

  slogan: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#EDEAEA",
    width: 390,
    height: 168,
    marginHorizontal: 10,
    marginBottom: 6,
    borderRadius: 10,
  },
  bodyCard1: {
    width: 350,
    height: 160,
  },
  bodyCard2: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 370,
  },
  bodyCard3: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  bodyCard4: {
    width: 380,
    height: 280,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bodyCard5: {
    width: 200,
    height: 280,
    flex: 1,
    marginLeft: 15,
    alignItems: "center",
  },
  imgEsquerda: {
    width: 124,
    height: 124,
    borderRadius: 90,
    marginLeft: 15,
  },
  imgDireita: {
    width: 124,
    height: 124,
    borderRadius: 90,
    marginLeft: 250,
  },
  tituloCard: {
    fontSize: 24,
    color: "#DD0836",
  },
  tituloCard2: {
    fontSize: 24,
    color: "#DD0836",
    marginLeft: 32,
  },
  textCard1: {
    textAlign: "center",
    marginLeft: 180,
    marginTop: 130,
  },
  textCard2: {
    textAlign: "center",
    marginTop: 10,
  },
});
