import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {completed, deleteTodo} from './store/actions';

export default function Items({item, onPress}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(completed(item.item.text));
      }}
      style={{
        flexDirection: 'row',
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 22,
        marginVertical: 5,
        borderColor: 'violet',
        borderWidth: 1,
      }}>
      <View
        style={{
          backgroundColor: item.index % 2 == 0 ? 'blue' : 'green',
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'white'}}>{item.index + 1}</Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 18,
          width: '50%',
          textDecorationLine: item.item.completed ? 'line-through' : 'none',
        }}
        numberOfLines={1}>
        {item.item.text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
        }}>
        <Icon
          name="delete"
          size={25}
          onPress={() => {
            dispatch(deleteTodo(item.item.text));
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
