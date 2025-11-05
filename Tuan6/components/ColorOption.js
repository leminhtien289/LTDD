import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function ColorOption({ colorHex, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]}
      onPress={onPress}
    >
      <View style={[styles.colorBox, { backgroundColor: colorHex }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    marginVertical: 5,
  },
  selectedContainer: {
    borderColor: '#007AFF',
  },
  colorBox: {
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
});