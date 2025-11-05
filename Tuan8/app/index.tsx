// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';

// export default function WelcomeScreen() {
//   const [name, setName] = useState('');
//   const router = useRouter();

//   const handleGetStarted = () => {
//     if (name.trim()) {
//       router.push({
//         pathname: '/list', // Điều hướng thẳng sang 'list'
//         params: { userName: name }
//       });
//     } else {
//       alert('Please enter your name');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.content}>
//         <Text style={styles.title}>MANAGE YOUR{'\n'}TASK</Text>

//         <View style={styles.inputContainer}>
//           <Ionicons name="mail-outline" size={24} color="#999" />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your name"
//             placeholderTextColor="#999"
//             value={name}
//             onChangeText={setName}
//           />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
//           <Text style={styles.buttonText}>GET STARTED</Text>
//           <Ionicons name="arrow-forward" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// // ... (Giữ nguyên styles từ câu trả lời trước)
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FFFFFF' },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#3B5998',
//     textAlign: 'center',
//     marginBottom: 60,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F7F7F7',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 10,
//     width: '100%',
//     padding: 15,
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   button: {
//     flexDirection: 'row',
//     backgroundColor: '#50A8DE',
//     padding: 18,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ALL_PHONES, Phone } from '../data/products';

// Import components
import RatingStars from '../components/RatingStars';
import ActionButton from '../components/ActionButton';

export default function ProductDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // 1. Quyết định ID sản phẩm
  // Nếu có params.selectedId (từ modal trả về) thì dùng nó
  // Nếu không, dùng 'blue' làm mặc định
  const selectedId = (params.selectedId || 'blue') as string;

  // 2. Tìm sản phẩm trong data
  const product = ALL_PHONES.find(p => p.id === selectedId);

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>Không tìm thấy sản phẩm</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Image source={product?.image} style={styles.mainImage} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
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
          onPress={() =>
            // 3. Mở modal và gửi ID hiện tại
            router.push({
              pathname: '/colorModal',
              params: { currentId: product.id }
            })
          }
        >
          <Text>{product.id === 'blue' ? '4 MÀU-CHỌN MÀU' : '4 MÀU-CHỌN LOẠI'}</Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>

        <ActionButton
          title="CHỌN MUA"
          onPress={() => alert('Đã thêm vào giỏ hàng!')}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  mainImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain'
  },
  infoContainer: {
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D9534F',
    marginRight: 10
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through'
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  promoText: {
    color: '#000',
    marginRight: 5
  },
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
});