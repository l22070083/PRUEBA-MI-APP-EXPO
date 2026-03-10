import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { nombre = "Damian", edad = "21 años" } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Detalles</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text>
    </View>
  );
}