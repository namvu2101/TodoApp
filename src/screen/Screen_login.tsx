import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LayoutAuth from '../components/LayoutAuth';
import ViewC from '../mylib/UIKit/ViewC';
import {Button} from '@ui-kitten/components/ui';
import InputBasic from '../components/InputBasic';
import {SIZE} from '../constants/themp';
import {Icon} from '@rneui/themed';
import {Avatar} from '@rneui/base';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {User} from '../data';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Screen_login() {
  const [secure, setSecure] = React.useState(true);
  const navigation = useNavigation();
  const [account, setAccount] = useState('vpnam2k1@gmail.com');
  const [password, setPassword] = useState('123456');
  const handleLogin = async () => {
    if (account != User.email) {
      Alert.alert('Thông báo!', 'Email không chính xác');
    } else if (password != User.password) {
      Alert.alert('Thông báo!', 'Mật khẩu không chính xác');
    } else {
      await AsyncStorage.setItem('user', 'account');
      navigation.replace('MyTabs');
    }
  };
  return (
    <LayoutAuth>
      <StatusBar backgroundColor={'#04067F'} barStyle={'light-content'} />
      <ViewC flex={1} style={styles.container}>
        <ViewC flex={3} alignItems="center">
          <Image
            source={require('../assets/image/src/logo_mci.png')}
            style={styles.logo}
          />
          <Button
            accessoryLeft={props => (
              <Image
                source={require('../assets/image/src/Earth.png')}
                resizeMode="cover"
              />
            )}
            accessoryRight={() => <Icon name="arrow-drop-down" size={18} />}
            style={styles.btnlang}
            status="control"
            size="small">
            Tiếng Việt
          </Button>

          <Text style={styles.text}>ĐĂNG NHẬP</Text>
        </ViewC>
        <ViewC flex={4} marginTop={20} marginHorizontal={15}>
          <InputBasic
            title={'Tên đăng nhập'}
            placeholder={'Nhập Email/SĐT'}
            value={account}
            onChangeText={setAccount}
          />
          <InputBasic
            value={password}
            onChangeText={setPassword}
            accessoryRight={() => (
              <Icon
                onPress={() => setSecure(!secure)}
                name={secure ? 'eye-off' : 'eye'}
                type="ionicon"
                size={20}
              />
            )}
            title={'Mật khẩu'}
            placeholder={'Nhập mật khẩu'}
            secureTextEntry={secure}
          />
          <Text
            onPress={() => {}}
            style={{
              ...styles.text,
              color: 'green',
              marginTop: 10,
              fontSize: 15,
            }}>
            Quên mật khẩu?
          </Text>
          <Button
            // disabled={
            //   account.length == 0 || password.length == 0 ? true : false
            // }
            style={styles.btnSubmit}
            onPress={handleLogin}>
            Đăng nhập
          </Button>
        </ViewC>
        <ViewC flex={3} alignItems="center">
          <Image
            source={require('../assets/image/src/background_3.png')}
            style={styles.bg}
          />
          <Button
            accessoryRight={() => (
              <Pressable style={styles.bubble}>
                <Avatar
                  rounded
                  source={require('../assets/image/src/chatbubble.png')}
                  size={15}
                  containerStyle={{backgroundColor: 'black'}}
                />
              </Pressable>
            )}
            style={styles.help}
            status="control"
            size="small">
            Bạn cần hỗ trợ?
          </Button>
        </ViewC>
      </ViewC>
    </LayoutAuth>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#04067F',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FBA00D',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginTop: 50,
    borderRadius: 100,
  },
  btnlang: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: SIZE.width / 2.5,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 10,
    right: 15,
  },
  btnSubmit: {
    borderRadius: 10,
    backgroundColor: '#1C84C7',
    borderColor: 'white',
    marginVertical: 10,
  },
  help: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: SIZE.width / 2.5,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 10,
    right: 15,
  },
  bubble: {
    height: 20,
    width: 20,
    backgroundColor: '#081F3D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  bg: {
    width: SIZE.width,
    height: SIZE.height / 3,
    resizeMode: 'contain',
  },
});
