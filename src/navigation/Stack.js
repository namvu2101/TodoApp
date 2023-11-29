import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen_login from '../screen/Screen_login';
import Tabs from './Tabs';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
const Stack = createNativeStackNavigator();

export default function MyStack() {
  let user = 'null';
  const login = async () => {
    user = await AsyncStorage.getItem('user');
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={user != 'null' ? 'MyTabs' : 'Login'}>
        <Stack.Screen name="Login" component={Screen_login} />
        <Stack.Screen name="MyTabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
