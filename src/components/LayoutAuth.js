import {SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

export default function LayoutAuth({children}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView style={{flex: 1}}>{children}</KeyboardAvoidingView>
    </SafeAreaView>
  );
}
