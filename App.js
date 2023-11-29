import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/todoApp/store/reducer';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import MyStack from './src/navigation/Stack';
export default function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <MyStack />
      </ApplicationProvider>
    </Provider>
  );
}
