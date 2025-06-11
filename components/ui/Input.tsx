import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Input({ label, value, onChangeText, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
}); 