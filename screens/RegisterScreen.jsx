import { View, Text, Button } from "react-native";
import { styles } from "../assets/styles/styles";

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Estamos en Login
      </Text>
      <Button
        title="Iniciar sesión"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
