import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";

const RegisterScreen = ({ navigation, users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    navigation.navigate('Login');
  };

  return (
    <View>
      <View tyle={styles.container}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Nombre de usuario:</Text>
        <TextInput
          label="Usuario"
          mode="outlined"
          left={<TextInput.Icon icon="account"/>}
          value={username} 
          onChangeText={setUsername} />
      </View>
      <View tyle={styles.container}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Contraseña:</Text>
        <TextInput
          label="Contraseña"
          mode="outlined"
          left={<TextInput.Icon icon="key"/>} 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true}/>
      </View>
      <Button style={{marginTop:10}}
        icon="login" 
        mode="contained"
        title="Registrarse" 
        onPress={handleRegister}>Registarse</Button>
    </View>
  );
};

export default RegisterScreen;