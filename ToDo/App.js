import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import TodoItem from './TodoItem';

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now().toString(), title: task, completed: false }
    ]);
    setTask('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          placeholderTextColor="#9C27B0"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 40, 
    backgroundColor: '#EAE6F0' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#6200EE' 
  },
  inputRow: { 
    flexDirection: 'row', 
    marginBottom: 20 
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#6200EE', // Deep purple border
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginRight: 10,
    borderRadius: 8, // Slightly rounded corners for a modern look
    color: '#311B92' // Very dark purple text while typing
  },
  addButton: {
    backgroundColor: '#6200EE', // Your deep purple theme color
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Matches your input box
  },
  addButtonText: {
    color: '#FFFFFF', // White text to stand out against the purple
    fontWeight: 'bold',
    fontSize: 16,
  }
});