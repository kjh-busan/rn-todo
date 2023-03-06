import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './images';

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
      <IconButton type={images.uncompleted} />
      <IconButton type={images.completed} />
      <IconButton type={images.delete} />
      <IconButton type={images.edit} />
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
