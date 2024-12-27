import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

const CalculatorApp = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleEqualPress = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('1')}>1</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('2')}>2</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('3')}>3</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('+')}>+</Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('4')}>4</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('5')}>5</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('6')}>6</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('-')}>-</Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('7')}>7</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('8')}>8</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('9')}>9</Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('*')}>*</Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('0')}>0</Button>
          <Button style={styles.button} mode="contained" onPress={handleClear}>C</Button>
          <Button
            style={[styles.button, { backgroundColor: 'green' }]} // Green background for '=' button
            mode="contained"
            onPress={handleEqualPress}
          >
            =
          </Button>
          <Button style={styles.button} mode="contained" onPress={() => handleButtonPress('/')}>/</Button>
        </View>
      </View>
      <Text style={styles.footer}>Calc by Sanket</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default CalculatorApp;
