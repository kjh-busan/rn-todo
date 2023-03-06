import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native';

const Input = () => {
  return (
    <TextInput style={styles.input} placeholder="+ Add a task" maxLength={50} />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 15,
    fontSize: 20,
    backgroundColor: '#f1f3f5',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: 'center',
  },
});

export default Input;
