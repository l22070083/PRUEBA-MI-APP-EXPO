import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { View, Text } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOLA MUNDO :)</Text>
      <StatusBar style="auto" />

        <Text>Pantalla principal</Text>
        <Link href="/about">Ir a About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
