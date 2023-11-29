import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Todos from '../todoApp/Index';
import InforUser from '../screen/InforUser';
import {Icon} from 'react-native-paper';
import {color} from '@rneui/base';

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F1692F',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={Todos}
        options={{
          headerTitle: 'Danh sách việc làm',
          tabBarIcon: ({color, size}) => (
            <Icon source="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={InforUser}
        options={{
          headerTitle: 'Thông tin người dùng',
          tabBarIcon: ({color, size}) => (
            <Icon source="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
