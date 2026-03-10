import { View, Text, Button } from "react-native";
import { useContador } from "../hooks/useContador";

export default function HomeScreen({ navigation }) {
  const { valor, incrementar, reiniciar } = useContador();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Pantalla Principal</Text>

      <Text>Contador: {valor}</Text>
      <Button title="Sumar" onPress={incrementar} />
      <Button title="Reiniciar" onPress={reiniciar} />

      <Button
        title="Ir a detalles"
        onPress={() =>
          navigation.navigate("Details", {
            nombre: "Damian",
            edad: valor,
          })
        }
      />
    </View>
  );
} 