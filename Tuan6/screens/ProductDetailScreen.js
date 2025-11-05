// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StatusBar,
//   ScrollView
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { PRODUCT_DATA } from '../data/products';

// import RatingStars from '../components/RatingStars';
// import ActionButton from '../components/ActionButton';

// export default function ProductDetailScreen({ navigation, route }) {
//   const [selectedProductId, setSelectedProductId] = useState('blue');

//   // Lắng nghe params trả về từ Modal
//   useEffect(() => {
//     if (route.params?.selectedId) {
//       setSelectedProductId(route.params.selectedId);
//     }
//   }, [route.params?.selectedId]);

//   // Lấy thông tin sản phẩm dựa trên state
//   const product = PRODUCT_DATA[selectedProductId];

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" />
//       <ScrollView>
//         <Image source={ product.image } style={styles.mainImage} />
        
//         <View style={styles.infoContainer}>
//           <Text style={styles.title}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          
//           <RatingStars rating={4} reviewCount={828} />

//           <View style={styles.priceContainer}>
//             <Text style={styles.price}>{product.price}</Text>
//             <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//           </View>

//           <View style={styles.promoContainer}>
//             <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>
//             <Ionicons name="help-circle-outline" size={16} color="#666" />
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity 
//           style={styles.selectorButton}
//           onPress={() => navigation.navigate('ColorSelectorModal', {
//             currentId: product.id
//           })}
//         >
//           <Text>{product.id === 'blue' ? '4 MÀU-CHỌN MÀU' : '4 MÀU-CHỌN LOẠI'}</Text>
//           <Ionicons name="chevron-forward" size={20} color="#666" />
//         </TouchableOpacity>

//         <ActionButton
//           title="CHỌN MUA"
//           onPress={() => alert('Đã thêm vào giỏ hàng!')}
//           style={styles.buyButton}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: '#FFF' },
//   mainImage: { width: '100%', height: 400, resizeMode: 'contain' },
//   infoContainer: { padding: 20 },
//   title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   priceContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
//   price: { fontSize: 20, fontWeight: 'bold', color: '#D9534F', marginRight: 10 },
//   originalPrice: { fontSize: 16, color: '#999', textDecorationLine: 'line-through' },
//   promoContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
//   promoText: { color: '#000', marginRight: 5 },
//   footer: { 
//     flexDirection: 'row', 
//     borderTopWidth: 1, 
//     borderColor: '#EEE', 
//     padding: 10 
//   },
//   selectorButton: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#EEE',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   buyButton: {
//     flex: 1,
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ActivityIndicator, 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import RatingStars from '../components/RatingStars';
import ActionButton from '../components/ActionButton';

const API_URL = 'https://690ad26e1a446bb9cc23fced.mockapi.io/phones';

export default function ProductDetailScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allPhonesData, setAllPhonesData] = useState([]); 
  
  const [selectedProductId, setSelectedProductId] = useState('1'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setAllPhonesData(json); 
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []); 

  useEffect(() => {
    if (route.params?.selectedId) {
      setSelectedProductId(route.params.selectedId);
    }
  }, [route.params?.selectedId]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Có lỗi xảy ra khi tải dữ liệu!</Text>
      </View>
    );
  }

  const product = allPhonesData.find(p => p.id === selectedProductId);
  
  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Không tìm thấy sản phẩm.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.mainImage} />
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name} - Hàng chính hãng</Text>
          <RatingStars rating={4} reviewCount={828} />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.originalPrice}>{product.originalPrice}</Text>
          </View>
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>
            <Ionicons name="help-circle-outline" size={16} color="#666" />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.selectorButton}
          onPress={() => navigation.navigate('ColorSelectorModal', {
            currentId: product.id,
            allPhones: allPhonesData, 
          })}
        >
          <Text>{product.id === '1' ? '4 MÀU-CHỌN MÀU' : '4 MÀU-CHỌN LOẠI'}</Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>

        <ActionButton
          title="CHỌN MUA"
          onPress={() => alert('Đã thêm vào giỏ hàng!')}
          style={styles.buyButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  mainImage: { width: '100%', height: 400, resizeMode: 'contain' },
  infoContainer: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  priceContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#D9534F', marginRight: 10 },
  originalPrice: { fontSize: 16, color: '#999', textDecorationLine: 'line-through' },
  promoContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  promoText: { color: '#000', marginRight: 5 },
  footer: { 
    flexDirection: 'row', 
    borderTopWidth: 1, 
    borderColor: '#EEE', 
    padding: 10 
  },
  selectorButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 5,
    marginRight: 10,
  },
  buyButton: {
    flex: 1,
  },
});