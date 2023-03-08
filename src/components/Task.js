import React, { useState } from 'react';
import { images } from '../images';
import {
  Dimensions, 
  StyleSheet,
  View,
  Text
} from 'react-native';
import IconButton from './IconButton';

// const [ task, setTask ] = useState({});
const Task = ({ task }) => {
  function checkComplete() {
    // setTask(!task.completed);
    alert('task object complete state', task.completed);
  }

  return (
    <View style={styles.container}>
      {
        task.completed
        ? <><IconButton onPressOut={() => checkComplete()} type={images.completed} /><Text style={{ fontSize: 20, flex: 1 }}>{task.textTodo}</Text><IconButton type={images.delete} /></>
        : <><IconButton type={images.uncompleted} /><Text style={{ fontSize: 20, flex: 1 }}>{task.textTodo}</Text><IconButton type={images.edit} /></>
      }
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
});

export default Task;
