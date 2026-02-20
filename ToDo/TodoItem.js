import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(todo.id)}>
        <Text
          style={[
            styles.text,
            todo.completed && styles.completed
          ]}
        >
          {todo.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => onDelete(todo.id)}>
        <Text style={styles.actionButtonText}>✔️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F3E5F5',
    marginBottom: 10,
    borderRadius: 8,
  },
  text: { 
    fontSize: 18,
    color: '#4A148C',
    fontWeight: '500'
   },
  completed: {
    textDecorationLine: 'line-through',
    color: '#B39DDB'
  },
  actionButton: {
    backgroundColor: '#D1C4E9', // A soft, calming lavender/plum
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6, // Slightly rounded to match the rest of the app
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
  }
});