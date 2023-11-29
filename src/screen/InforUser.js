import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {User, list} from '../data';
import LayoutAuth from '../components/LayoutAuth';
import {SIZE} from '../constants/themp';
import {Avatar} from 'react-native-paper';
import {Button} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FONTS} from '../mylib/UIKit/text/Fonts';

export default function InforUser({navigation}) {
  const handelLogout = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có muốn đăng xuất không?',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            AsyncStorage.setItem('user', '');
            navigation.replace('Login');
          },
          text: 'Không',
        },
      ],
      {cancelable},
    );
  };
  return (
    <LayoutAuth>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            width: SIZE.width,
            height: SIZE.height / 3,
          }}>
          <Image
            source={User.avatar}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />

          <Pressable onPress={() => {}} style={styles.avatar}>
            <Avatar.Image
              source={User.avatar}
              size={100}
              rounded
              avatarStyle={{resizeMode: 'contain'}}
            />
          </Pressable>
        </View>
        {list.map((field, index) => (
          <View
            key={index}
            style={{width: '100%', marginBottom: 10, paddingHorizontal: 15}}>
            <Text style={FONTS.h2b}>{field.name}</Text>
            <View style={styles.box}>
              <Text style={FONTS.h2}>{field.value}</Text>
            </View>
          </View>
        ))}
        <Button onPress={handelLogout}>Đăng xuất</Button>
      </ScrollView>
    </LayoutAuth>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  box: {
    height: 50,
    borderColor: '#04067F',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
