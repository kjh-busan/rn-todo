import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const IconButton = ({ type }) => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButton;