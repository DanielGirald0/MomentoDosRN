import { View, Text, Button } from "react-native";
import { styles } from "../assets/styles/styles";
import HomeTabs from './HomeTabs';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Inicia sesión o registrate Gratis!
      </Text>
      <Button
        title="Iniciar sesión"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Registarse"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}
