import { View,Text } from "react-native";
import { styles } from "../assets/styles/styles";
import HomeTabs from './HomeTabs';

export default function Contacts({route}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Estamos en contactenos</Text>
      </View>
    )
  }