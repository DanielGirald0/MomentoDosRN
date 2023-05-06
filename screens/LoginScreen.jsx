import { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";
import { TextInput, Button } from 'react-native-paper';
//import { DataContext } from '../DataContext';
import { useNavigation } from '@react-navigation/native';
import RegisterScreen from "./RegisterScreen";

/*export let users= [
  {username:'dg', name:'Daniel Giraldo', password:'11', role:1},
  {username:'fz', name:'Pepito Perez ', password:'22', role:2}
]*/

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const { users } = useContext({RegisterScreen});
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      navigation.navigate('Rent');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Inicio sesión</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={{ marginTop: 10 }}
          icon="login"
          mode="contained"
          onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}