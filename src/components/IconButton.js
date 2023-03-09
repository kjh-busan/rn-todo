import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const IconButton = ({ type, onPressOut, id }) => {
  IconButton.defaultProps = {
    onPressOut: () => {},
  };
  
  const _onPressOut = () => {
    onPressOut(id);
  };

  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut} >
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