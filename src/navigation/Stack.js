import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen_login from '../screen/Screen_login';
import Tabs from './Tabs';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

export default function MyStack() {
  const login = async () => await AsyncStorage.getItem('user');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={login.length > 0 ? 'MyTabs' : 'Login'}>
        <Stack.Screen name="Login" component={Screen_login} />
        <Stack.Screen name="MyTabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
