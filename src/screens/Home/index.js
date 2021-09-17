import React from "react";
import { StyleSheet, View, SafeAreaView, Text} from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>      
     </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25
    },
})