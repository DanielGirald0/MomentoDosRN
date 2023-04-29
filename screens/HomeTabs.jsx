import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';

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
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
      <Tab.Screen name="Login" component={LoginScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
      <Tab.Screen name="Register" component={RegisterScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='phone' size={30} />)
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='person' size={30} />)
      }} />
    </Tab.Navigator>
  );
}