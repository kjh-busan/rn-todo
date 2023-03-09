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
    setIsEditing(false);
    updateTask(editedTask);
  };
  const _toggleTask = () => {
    // const editedTask = Object.assign({}, item, { text });

    setIsEditing(false);
    // alert('_toggleTask.isEditing = ', isEditing);

    toggleTask(item.id);
  };
  const _handleUpdateButtonPress = () => setIsEditing(true);
  const _handleBlur = () => setIsEditing(false); 


  return (
    <View style={styles.container}>
      {isEditing ||
      <IconButton
        style={item.completed ? styles.themeGray : styles.themeBlack}
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={_toggleTask}
      />}
      {isEditing
        ? <TextInput
            style={styles.input}
            value={text}
            autoFocus={true}
            onFocus={_handleUpdateButtonPress}
            onChangeText={_handleTextChange}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_handleBlur}
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

export default Task;
