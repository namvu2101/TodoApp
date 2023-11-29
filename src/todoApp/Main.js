import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Color, SIZE} from '../constants/themp';
import {FlatList} from 'react-native';
import {Icon} from '@rneui/themed';

export default function Main() {
  const [list, setList] = useState([]);
  //   const [item, setItem] = useState();
  const [input, setInput] = useState('');
  const handleAdd = () => {
    setInput('');
    setList(prev => [...prev, input]);
  };
  const handleDel = item => {
    setList(() => {
      const newList = list.filter(i => i != item);
      return newList;
    });
  };
  const renderItem = ({item, index}) => {
    return (
      <View
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
            backgroundColor: index % 2 == 0 ? 'blue' : 'green',
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            marginHorizontal: 20,
          }}>
          <Text style={{color: 'white'}}>{index}</Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            width: '60%',
          }}
          numberOfLines={1}>
          {item}
        </Text>
        <Icon
          name="home"
          size={20}
          onPress={() => {
            handleDel(item);
          }}
        />
      </View>
    );
  };
 
  return (
    <View style={styles.container}>
      <View style={styles._boxinput}>
        <TextInput style={styles.input} onChangeText={setInput} value={input} />
        <Button title="Add" onPress={handleAdd} />
      </View>
      <FlatList
        data={list}
        contentContainerStyle={{flex: 1}}
        renderItem={renderItem}
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
