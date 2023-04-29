import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";
import { TextInput, Button } from 'react-native-paper';
import { useState } from "react";

let users= [
  {username:'dg', name:'Daniel Giraldo', password:'11', role:1},
  {username:'fz', name:'Pepito Perez ', password:'22', role:2}
]

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errormess, setErrormess] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Inicio sesión</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account"/>}
        onChangeText={username => setUsername(username)}
        value={username}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key"/>}
        onChangeText={password => setPassword(password)}
        value={password}
        secureTextEntry={true}
      />
      <Button 
        style={{marginTop:10}}
        icon="login" 
        mode="contained" 
        onPress={() => {
          let fuser= users.find(usr => usr.username == username && usr.password == password)
          if (fuser != undefined){
            const {name, username} = fuser;
            navigation.navigate('Profile', {name:name, password:password})
          }
          else if (username == "") {
            
          }
        }
        }
        >
          Entrar
      </Button>
      <Text style={{color:'red'}}>{errormess}</Text>
    </View>
  );
}
