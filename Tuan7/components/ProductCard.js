import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../data/bikes';

export default function ProductCard({ item, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={onPress} // Sử dụng hàm onPress được truyền từ cha
    >
      <TouchableOpacity 
        style={styles.heartIcon}
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={20} color={COLORS.textRed} />
      </TouchableOpacity>
      
      <Image source={ item.image } style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardPrice}>$ {item.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    margin: 10,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  cardName: {
    fontSize: 16,
    color: COLORS.textLight,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 5,
  },
});