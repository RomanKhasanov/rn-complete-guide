import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal)
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
    console.log(enteredGoal);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal"  
          style={styles.input} 
          onChangeText={goalInputHandler} 
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={onCancel} /></View>
          <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  )
} 
  
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },

  button: {
    width: '40%'
  }
})

export default GoalInput;