import React from 'react';
import { Images } from '../Images';
import { StyleSheet, TouchableOpacity } from 'react-native';

const IconButton = ({ type }) => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Images source={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButton;