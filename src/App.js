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
  const [ newTask, setNewTask ] = useState('');
  // const [ newText, setNewText ] = useState('');
  const [ tasks, setTasks ] = useState([]);

  // const _addTask = () => {
  //   const newTask = {
  //     id: Date.now(),
  //     textTodo: newText,
  //     completed: false,
  //   };

  //   taskList.push(newTask);
  //   // alert("taskList: " + taskList.length);
  //   setTaskList(taskList);
  //   setNewText('');
  //   setNewTask('');
  // };
  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };
  //삭제 함수
  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
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
      <ScrollView>
        {Object.values(tasks)
          .reverse()
          .map((item) => (
            <Task key={item.id} item = {item} deleteTask={_deleteTask}/>
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
