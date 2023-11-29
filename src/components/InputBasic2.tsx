import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Input} from '@ui-kitten/components';

export default function InputBasic(props: any) {
  return (
    <View style={styles._box}>
      <Text style={styles._text}>{props.title}</Text>
      <Input
        status="success"
        size="large"
        style={styles._input}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        textStyle={{fontSize: 16, color: 'black'}}
        cursorColor={'black'}
        accessoryRight={props.accessoryRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  _box: {},
  _input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
  },
  _text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    paddingVertical: 10,
  },
});
