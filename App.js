import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabs from './screens/HomeTabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Perfil Del Usuario' }} />
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{ title: 'Renta de carros' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Renta de carros' }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Renta de carros' }} /> */}