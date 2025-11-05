import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { COLORS, BIKES } from '../data/bikes';
import ProductCard from '../components/ProductCard'; // Import component

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeTitle}>The world's Best Bike</Text>
      
      <View style={styles.filterContainer}>
        {['All', 'Roadbike', 'Mountain'].map(cat => (
          <TouchableOpacity 
            key={cat}
            style={[
              styles.filterButton, 
              selectedCategory === cat && styles.filterButtonActive
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={selectedCategory === cat ? styles.filterTextActive : styles.filterText}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={BIKES}
        renderItem={({ item }) => (
          <ProductCard 
            item={item} 
            // Truyền navigation xuống component con
            onPress={() => navigation.navigate('ProductDetail', { product: item })} 
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textRed,
    margin: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: COLORS.buttonRed,
  },
  filterText: {
    color: COLORS.textLight,
    fontSize: 16,
  },
  filterTextActive: {
    color: COLORS.white,
    fontSize: 16,
  },
});