import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import Task from './components/Task';

export default function App() {
  const [newTask, setNewTask] = useState('');
  // const [ isEditing, setIsEditing ] = useState(false);
  // const _setIsEditing = (item) => setIsEditing(item);
  const [tasks, setTasks] = useState(
    {
      1: {id: 1, text: "Hello1", completed: true},
      2: {id: 2, text: "Hello todo 2", completed: true},
      3: {id: 3, text: "Hello3", completed: false},
    }
);

  const _addTask = () => {
    if (newTask.trim().length > 0) {
      const ID = Date.now().toString();
      const newTaskObject = {
        [ID]: { id: ID, text: newTask, completed: false },
      };
      setNewTask('');
      setTasks({ ...tasks, ...newTaskObject });
    } else {
      alert('Please Input a Task');
      setNewTask('');
    }
  };

  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  };
  
  const _updateTask = (item) => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[item.id]=item;
    setTasks(currentTasks);
  }

  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="Todo List✔️"></Title>
      <Input
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      <ScrollView>
        {Object.values(tasks)
          .reverse()
          .map((item) => (
            <Task
              key={item.id}
              item={item}
              deleteTask={_deleteTask}
              toggleTask={_toggleTask}
              updateTask={_updateTask}
              // isEditing={isEditing}
              // setIsEditing={_setIsEditing}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
