import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, SIZE} from '../constants/themp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addTodo, completed, deleteTodo, updateTodo} from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import TodoReducer from './store/slice';
import Items from './Items';
import {Button} from '@ui-kitten/components';

export default function Todos() {
  const selector = useSelector(state => state.todo);

  const [input, setInput] = useState('');
  interface Item {
    id: Number;
    text: String;
    completed: Boolean;
  }

  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getList = async () => {
  //     const data = await AsyncStorage.getItem('Todo');
  //     dispatch(updateTodo(data));
  //   };
  //   getList();
  // }, []);

  const handleAdd = () => {
    if (input.length != 0) {
      setInput('');
      dispatch(addTodo(input));
      // saveArrayToAsyncStorage(selector);
    } else {
      Alert.alert('Thông báo!', 'Không được để trống');
    }
  };
  const saveArrayToAsyncStorage = async (array: Array<any>) => {
    try {
      const jsonValue = JSON.stringify(array);
      await AsyncStorage.setItem('Todos', jsonValue);
    } catch (error) {
      console.error('Error saving array to AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles._boxinput}>
        <TextInput style={styles.input} onChangeText={setInput} value={input} />
        <Button onPress={handleAdd}>Thêm</Button>
      </View>
      <FlatList
        data={selector}
        contentContainerStyle={{flex: 1}}
        renderItem={(item: any, index: number) => (
          <Items item={item} index={index + 1} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Color.white, flex: 1},
  _boxinput: {
    flexDirection: 'row',
    width: SIZE.width,
    justifyContent: 'space-between',
    marginVertical: 22,
    paddingHorizontal: 20,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    flex: 1,
    color: 'black',
  },
});
