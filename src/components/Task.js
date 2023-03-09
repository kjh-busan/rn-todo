import React, { useState } from 'react';
import { images } from '../images';
import {
  Dimensions, 
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
import IconButton from './IconButton';

const Task = ({ item, deleteTask, toggleTask, updateTask, isEditMode  }) => {
  const [ isEditing, setIsEditing ] = useState(isEditMode);
  const [ text, setText ] = useState(item.text);

  const _handleTextChange = ( text ) => {
    setText(text);
  };
  const _onSubmitEditing = () => {
    const editedTask = Object.assign({}, item, { text });
    setIsEditing(!isEditing);
    updateTask(editedTask);
  };
  const _handleUpdateButtonPress = () => setIsEditing(!isEditing);

  return (
    <View style={styles.container}>
      <IconButton
        style={item.completed ? styles.themeGray : styles.themeBlack}
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
      />
      {isEditing 
        ? <TextInput
            style={styles.input}
            value={text}
            autoFocus={true}
            onChangeText={_handleTextChange}
            onSubmitEditing={_onSubmitEditing}
          />
        : <Text style={item.completed ? styles.completed : styles.text}>{item.text}</Text>
      }
      {item.completed || ( isEditing ||
        <IconButton type={images.edit} onPressOut={_handleUpdateButtonPress} />)
      }
      {item.completed && (
        <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 15,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  completed: {
    fontSize: 20,
    flex: 1,
    color: 'gray',
    textDecorationLine: 'line-through',
    // textDecorationColor: 'gray',
  },
  text: {
    fontSize: 20,
    flex: 1,
    color: 'black',
  },
  themeGray: {
    flex: 1,
    color: 'red',
  },
  themeBlack: {
    flex: 1,
    color: 'blue',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
  },
});

export default Task;
