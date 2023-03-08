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
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    alert(`add : ${newTask}`);
    setNewTask('');
  };

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
        <Task text="todo list 1" />
        <Task text="todo list 2" />
        <Task text="todo list 3" />
        <Task text="todo list 4" />
        <Task text="todo list 5" />
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
