import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import CountContainer from './src/components/CountContainer';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <CountContainer />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
