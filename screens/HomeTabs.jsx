import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import UserScreen from './UserScreen';

const Tab = createBottomTabNavigator();
export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'yellowgreen'
      }}>
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
      <Tab.Screen name="Rent" component={LoginScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
      <Tab.Screen name="Car" component={RegisterScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='phone' size={30} />)
      }} />
    </Tab.Navigator>
  );
}