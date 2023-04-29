import { View,Text } from "react-native";
import { styles } from "../assets/styles/styles";
import HomeTabs from './HomeTabs';

export default function ProfileScreen({navigation}){
    let email = "dghurtado@gmail.com";
    let phone = "3208708671";
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el perfil del usuario</Text>
      </View>
    );
  }
  
