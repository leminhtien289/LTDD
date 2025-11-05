import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { COLORS } from '../data/bikes'; // Import màu

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { padding: 20 }]}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.welcomeText}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.welcomeImageContainer}>
        <Image 
          source={require('../assets/bike2.png')} 
          style={styles.welcomeImage} 
        />
      </View>
      <Text style={styles.welcomeTitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity 
        style={styles.redButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.redButtonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  welcomeText: {
    fontSize: 22,
    color: COLORS.textLight,
    textAlign: 'center',
    marginTop: 20,
  },
  welcomeImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
  },
  redButton: {
    backgroundColor: COLORS.buttonRed,
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
    margin: 20,
  },
  redButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});