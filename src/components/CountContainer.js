import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCount} from '../redux/CountAction';

const CountContainer = () => {
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Count : {count}</Text>
      <Button
        title="Increment Count"
        onPress={() => dispatch(incrementCount())}
      />
    </View>
  );
};

export default CountContainer;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    margin: 25,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
