import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Botao({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}>
        <Text style={styles.texto}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    width: 134,
    height: 32,
    backgroundColor: "#6854AD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  texto: {
    color: "#ffffff",
  },
});
