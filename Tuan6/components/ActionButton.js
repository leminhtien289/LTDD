import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ title, onPress, style }) {
  const isBuyButton = title === 'CHỌN MUA';
  const buttonStyle = isBuyButton ? styles.buyButton : styles.doneButton;
  const textStyle = isBuyButton ? styles.buyText : styles.doneText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#D9534F', // Đỏ
  },
  buyText: {
    color: '#FFFFFF',
  },
  doneButton: {
    backgroundColor: '#3B5998', // Xanh
  },
  doneText: {
    color: '#FFFFFF',
  },
});