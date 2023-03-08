import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import Task from './components/Task';

export default function App() {
  const [ newTask, setNewTask ] = useState('');
  const [ newText, setNewText ] = useState('');
  const [ taskList, setTaskList ] = useState([]);

  const _addTask = () => {
    const newTask = {
      id: Date.now(),
      textTodo: newText,
      completed: false,
    };

    taskList.push(newTask);
    // alert("taskList: " + taskList.length);
    setTaskList(taskList);
    setNewText('');
    setNewTask('');
  };

  const _handleTextChange = (text) => {
    setNewText(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="Todo List✔️"></Title>
      <Input
        value={newText}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      {
        taskList.map((task) => 
        <Task key={task.id} task={task} />
        )
      }

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
