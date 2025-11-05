import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../data/bikes';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <View style={styles.detailImageContainer}>
          <Image source={ product.image } style={styles.detailImage} />
        </View>

        <View style={styles.detailInfoContainer}>
          <Text style={styles.detailName}>{product.name}</Text>
          <Text style={styles.detailPrice}>
            <Text style={{textDecorationLine: 'line-through'}}>{product.price * 1.5}$</Text>
            <Text style={{color: 'black'}}> {product.price}$</Text>
          </Text>
          <Text style={styles.detailDescTitle}>Description</Text>
          <Text style={styles.detailDescText}>
            It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.detailFooter}>
        <TouchableOpacity style={styles.heartIconFooter}>
          <FontAwesome name="heart-o" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.redButton}
          onPress={() => alert('Đã thêm vào giỏ!')}
        >
          <Text style={styles.redButtonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
    padding: 5,
  },
  detailImageContainer: {
    width: '100%',
    height: 350,
    backgroundColor: COLORS.pinkBg,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailImage: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
  },
  detailInfoContainer: {
    padding: 20,
  },
  detailName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  detailPrice: {
    fontSize: 20,
    color: COLORS.textLight,
    marginVertical: 10,
  },
  detailDescTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 10,
  },
  detailDescText: {
    fontSize: 16,
    color: COLORS.textLight,
    lineHeight: 24,
    marginTop: 5,
  },
  detailFooter: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  heartIconFooter: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 30,
  },
  redButton: {
    backgroundColor: COLORS.buttonRed,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  redButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});