import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContador } from "../hooks/useContador";

export default function HomeScreen({ navigation }) {
  const { valor, incrementar, reiniciar } = useContador();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <Text style={styles.counter}>Contador: {valor}</Text>

      <TouchableOpacity style={styles.btnSumar} onPress={incrementar}>
        <Text style={styles.btnText}>SUMAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnReiniciar} onPress={reiniciar}>
        <Text style={styles.btnText}>REINICIAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnDetalles}
        onPress={() =>
          navigation.navigate("Details", { numero: valor })
        }
      >
        <Text style={styles.btnText}>IR A DETALLES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  counter: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  
  btnSumar: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  btnReiniciar: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  btnDetalles: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});