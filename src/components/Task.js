import React from 'react';
import { images } from '../images';
import {
  Dimensions, 
  StyleSheet,
  View,
  Text
} from 'react-native';
import IconButton from './IconButton';

const Task = ({ item, deleteTask, toggleTask }) => {
  return (
    <View style={styles.container}>
      { 
        item.completed
        ? <>
            <IconButton type={images.completed} />
            <Text style={{ fontSize: 20, flex: 1 }}>{item.text}</Text>
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/>
          </>
        : <>
            <IconButton type={images.uncompleted} id={item.id} onPressOut={toggleTask} />
            <Text style={{ fontSize: 20, flex: 1 }}>{item.text}</Text>
            <IconButton type={images.edit} id={item.id}/>
          </>
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
