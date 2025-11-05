// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
//   Alert, // Import Alert để hiển thị thông báo
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

// const COLORS = {
//   gradientStart: '#B79C41',
//   gradientEnd: '#D9C788',
//   text: '#000000',
//   buttonBlack: '#000000',
//   white: '#FFFFFF',
// };

// export default function App() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSecure, setIsSecure] = useState(true);

//   const handleLogin = () => {
//     if (!name || !password) {
//       Alert.alert('Lỗi', 'Vui lòng nhập Tên và Mật khẩu.');
//       return;
//     }
    
//     Alert.alert(
//       'Đăng nhập thành công',
//       `Tên người dùng: ${name}\nMật khẩu: ${password}`
//     );
//   };

//   const handleForgotPassword = () => {
//     Alert.alert('Thông báo', 'Chuyển sang màn hình Quên Mật khẩu!');
//   };

//   return (
//     <LinearGradient
//       colors={[COLORS.gradientStart, COLORS.gradientEnd]}
//       style={styles.gradientContainer}
//     >
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.container}>
//           <Text style={styles.title}>LOGIN</Text>

//           <View style={styles.inputContainer}>
//             <FontAwesome 
//               name="user-o" 
//               size={24} 
//               color={COLORS.text} 
//               style={styles.icon} 
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Name"
//               placeholderTextColor={COLORS.text}
//               autoCapitalize="words"
//               value={name}
//               onChangeText={setName}
//             />
//           </View>

//           <View style={styles.inputContainer}>
//             <Ionicons 
//               name="lock-closed-outline" 
//               size={24} 
//               color={COLORS.text} 
//               style={styles.icon} 
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor={COLORS.text}
//               secureTextEntry={isSecure}
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
//               <Feather 
//                 name={isSecure ? 'eye' : 'eye-off'} 
//                 size={24} 
//                 color={COLORS.text} 
//               />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginButtonText}>LOGIN</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleForgotPassword}>
//             <Text style={styles.forgotText}>Forgot your password?</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 40,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     marginBottom: 50,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: COLORS.text,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 25,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 15,
//     fontSize: 16,
//     color: COLORS.text,
//   },
//   loginButton: {
//     backgroundColor: COLORS.buttonBlack,
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 30,
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   forgotText: {
//     fontSize: 14,
//     color: COLORS.text,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
//   Image,
//   Alert,
// } from 'react-native';
// import { FontAwesome, Feather } from '@expo/vector-icons';

// const COLORS = {
//   background: '#F5F5F5',
//   white: '#FFFFFF',
//   text: '#000000',
//   textLight: '#666666',
//   starYellow: '#FFD700',
//   buttonBlue: '#3B5998',
//   borderLight: '#D1D1D1',
// };

// // Placeholder for product image

// export default function App() {
//   const [rating, setRating] = useState(5); // Trạng thái cho 5 sao
//   const [comment, setComment] = useState(''); // Trạng thái cho bình luận

//   // Hàm xử lý khi nhấn nút Gửi
//   const handleSubmit = () => {
//     if (rating === 0) {
//       Alert.alert('Lỗi', 'Vui lòng chọn số sao đánh giá.');
//       return;
//     }
//     if (!comment) {
//       Alert.alert('Lỗi', 'Vui lòng chia sẻ cảm nhận của bạn.');
//       return;
//     }
    
//     Alert.alert(
//       'Đã gửi đánh giá',
//       `Số sao: ${rating}\nBình luận: ${comment}`
//     );
//     // Reset state after submit
//     setRating(5);
//     setComment('');
//   };

//   // Hàm xử lý khi nhấn nút Thêm hình ảnh
//   const handleAddImage = () => {
//     Alert.alert('Thông báo', 'Mở thư viện/camera để thêm ảnh!');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
//       <View style={styles.container}>
        
//         {/* Thông tin sản phẩm */}
//         <View style={styles.productInfo}>
//           <Image source={require('./assets/image.png')} style={styles.productImage} />
//           <View style={styles.productTextContainer}>
//             <Text style={styles.productName}>
//               USB Bluetooth Music Receiver
//             </Text>
//             <Text style={styles.productDesc}>
//               HJX-001 - Biến loa thường thành loa bluetooth
//             </Text>
//           </View>
//         </View>

//         {/* Đánh giá sao */}
//         <Text style={styles.ratingTitle}>Cực kỳ hài lòng</Text>
//         <View style={styles.starsContainer}>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <TouchableOpacity key={star} onPress={() => setRating(star)}>
//               <FontAwesome
//                 name="star"
//                 size={40}
//                 color={rating >= star ? COLORS.starYellow : COLORS.borderLight}
//                 style={styles.star}
//               />
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Thêm hình ảnh */}
//         <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
//           <Feather name="camera" size={24} color={COLORS.text} />
//           <Text style={styles.addImageText}>Thêm hình ảnh</Text>
//         </TouchableOpacity>

//         {/* Ô bình luận */}
//         <TextInput
//           style={styles.commentInput}
//           placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
//           placeholderTextColor={COLORS.textLight}
//           multiline={true}
//           value={comment}
//           onChangeText={setComment}
//         />

//         {/* Nút Gửi */}
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitButtonText}>Gửi</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: COLORS.white,
//     margin: 10,
//     borderRadius: 8,
//   },
//   productInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.borderLight,
//     paddingBottom: 20,
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   productTextContainer: {
//     flex: 1,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: COLORS.text,
//   },
//   productDesc: {
//     fontSize: 14,
//     color: COLORS.textLight,
//   },
//   ratingTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   starsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 25,
//   },
//   star: {
//     marginHorizontal: 8,
//   },
//   addImageButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: COLORS.text,
//     borderStyle: 'dashed',
//     borderRadius: 8,
//     paddingVertical: 15,
//     marginBottom: 20,
//   },
//   addImageText: {
//     fontSize: 16,
//     color: COLORS.text,
//     marginLeft: 10,
//   },
//   commentInput: {
//     height: 150,
//     borderWidth: 1,
//     borderColor: COLORS.borderLight,
//     borderRadius: 8,
//     padding: 15,
//     textAlignVertical: 'top', 
//     fontSize: 14,
//     marginBottom: 20,
//   },
//   submitButton: {
//     backgroundColor: COLORS.buttonBlue,
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });


// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
//   Image,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import { FontAwesome, AntDesign } from '@expo/vector-icons';

// const COLORS = {
//   background: '#F0F0F0',
//   white: '#FFFFFF',
//   text: '#000000',
//   textLight: '#666666',
//   buttonBlue: '#0A58CA',
//   buttonRed: '#B94A4A',
//   priceRed: '#D70000',
//   borderLight: '#E0E0E0',
//   linkBlue: '#0A58CA',
// };

// const BASE_PRICE = 141800;
// const ORIGINAL_PRICE = 150000; 

// export default function App() {
//   const [quantity, setQuantity] = useState(1);
//   const [voucherCode, setVoucherCode] = useState('');

//   // Tính toán tổng tiền
//   const total = BASE_PRICE * quantity;

//   // Hàm định dạng tiền tệ
//   const formatCurrency = (value) => {
//     return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//   };

//   // Hàm xử lý tăng số lượng
//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   // Hàm xử lý giảm số lượng (không cho giảm dưới 1)
//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   // Hàm xử lý áp dụng mã giảm giá
//   const handleApplyVoucher = () => {
//     if (!voucherCode) {
//       Alert.alert('Lỗi', 'Vui lòng nhập mã giảm giá.');
//       return;
//     }
//     Alert.alert('Thông báo', `Đã áp dụng mã: ${voucherCode}`);
//   };

//   // Hàm xử lý đặt hàng
//   const handleCheckout = () => {
//     Alert.alert(
//       'Xác nhận đặt hàng',
//       `Số lượng: ${quantity}\nTổng tiền: ${formatCurrency(total)}`,
//       [
//         { text: 'Hủy' },
//         { text: 'OK' }
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
//       <ScrollView style={styles.container}>
//         {/* Card thông tin sản phẩm */}
//         <View style={styles.card}>
//           <View style={styles.productRow}>
//             <Image source={require('./assets/image1.png')} style={styles.productImage} />
//             <View style={styles.productInfo}>
//               <Text style={styles.productTitle}>
//                 Nguyên hàm tích phân và ứng dụng
//               </Text>
//               <Text style={styles.productProvider}>
//                 Cung cấp bởi Tiki Trading
//               </Text>
//               <Text style={styles.productPrice}>
//                 {formatCurrency(BASE_PRICE)}
//               </Text>
//               <Text style={styles.originalPrice}>
//                 {formatCurrency(ORIGINAL_PRICE)}
//               </Text>
//             </View>
//           </View>
          
//           <View style={styles.actionsRow}>
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
//                 <AntDesign name="minus" size={18} color={COLORS.textLight} />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{quantity}</Text>
//               <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
//                 <AntDesign name="plus" size={18} color={COLORS.textLight} />
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity>
//               <Text style={styles.linkText}>Mua sau</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.savedVoucherRow}>
//             <Text style={styles.textLight}>Mã giảm giá đã lưu</Text>
//             <TouchableOpacity>
//               <Text style={styles.linkText}>Xem tại đây</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Card Mã giảm giá */}
//         <View style={[styles.card, styles.voucherContainer]}>
//           <View style={styles.voucherInputContainer}>
//             <View style={styles.voucherIcon}>
//               <FontAwesome name="ticket" size={20} color={COLORS.text} />
//             </View>
//             <TextInput
//               style={styles.voucherInput}
//               placeholder="Mã giảm giá"
//               placeholderTextColor={COLORS.textLight}
//               value={voucherCode}
//               onChangeText={setVoucherCode}
//             />
//           </View>
//           <TouchableOpacity style={styles.applyButton} onPress={handleApplyVoucher}>
//             <Text style={styles.applyButtonText}>Áp dụng</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Banner Phiếu quà tặng */}
//         <View style={styles.giftCardBanner}>
//           <Text style={styles.textDark}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
//           <TouchableOpacity>
//             <Text style={styles.linkText}>Nhập tại đây?</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Card Tạm tính */}
//         <View style={styles.card}>
//           <View style={styles.totalRow}>
//             <Text style={styles.textDark}>Tạm tính</Text>
//             <Text style={styles.subtotalPrice}>{formatCurrency(total)}</Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer thanh toán */}
//       <View style={styles.footer}>
//         <View style={styles.totalRow}>
//           <Text style={styles.textLight}>Thành tiền</Text>
//           <Text style={styles.totalPrice}>{formatCurrency(total)}</Text>
//         </View>
//         <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
//           <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: COLORS.background },
//   container: { flex: 1 },
//   card: {
//     backgroundColor: COLORS.white,
//     padding: 15,
//     marginBottom: 10,
//   },
//   productRow: {
//     flexDirection: 'row',
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//     marginRight: 10,
//   },
//   productInfo: { flex: 1 },
//   productTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
//   productProvider: { fontSize: 14, color: COLORS.textLight, marginVertical: 4 },
//   productPrice: { fontSize: 18, fontWeight: 'bold', color: COLORS.priceRed },
//   originalPrice: {
//     fontSize: 14,
//     color: COLORS.textLight,
//     textDecorationLine: 'line-through',
//   },
//   actionsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 15,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: COLORS.borderLight,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: COLORS.borderLight,
//     borderRadius: 4,
//   },
//   quantityButton: {
//     padding: 8,
//   },
//   quantityText: {
//     paddingHorizontal: 15,
//     fontSize: 16,
//     color: COLORS.text,
//   },
//   linkText: { color: COLORS.linkBlue, fontSize: 14, fontWeight: 'bold' },
//   savedVoucherRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },
//   textLight: { color: COLORS.textLight, fontSize: 14 },
//   textDark: { color: COLORS.text, fontSize: 14 },
//   voucherContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   voucherInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: COLORS.borderLight,
//     borderRadius: 4,
//     marginRight: 10,
//   },
//   voucherIcon: {
//     padding: 10,
//     backgroundColor: '#FFECB3', // Màu vàng nhạt
//     borderTopLeftRadius: 3,
//     borderBottomLeftRadius: 3,
//   },
//   voucherInput: {
//     flex: 1,
//     paddingHorizontal: 10,
//     fontSize: 14,
//   },
//   applyButton: {
//     backgroundColor: COLORS.buttonBlue,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 4,
//   },
//   applyButtonText: { color: COLORS.white, fontWeight: 'bold' },
//   giftCardBanner: {
//     backgroundColor: COLORS.white,
//     padding: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   subtotalPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: COLORS.priceRed,
//   },
//   footer: {
//     backgroundColor: COLORS.white,
//     padding: 15,
//     borderTopWidth: 1,
//     borderColor: COLORS.borderLight,
//   },
//   totalPrice: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: COLORS.priceRed,
//   },
//   checkoutButton: {
//     backgroundColor: COLORS.buttonRed,
//     padding: 15,
//     borderRadius: 4,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   checkoutButtonText: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; // Dùng Feather cho icon checkbox

const COLORS = {
  backgroundStart: '#2C2A4A', 
  backgroundEnd: '#4E4980', 
  text: '#FFFFFF',
  button: '#6A61D0',
  inputBg: '#1B1930',
  inputLengthBg: '#FFFFFF',
};

// Component Checkbox nội bộ
const OptionRow = ({ label, value, onValueChange }) => (
  <TouchableOpacity style={styles.optionRow} onPress={() => onValueChange(!value)}>
    <Text style={styles.optionLabel}>{label}</Text>
    <Feather 
      name={value ? 'check-square' : 'square'} 
      size={26} 
      color={COLORS.text} 
    />
  </TouchableOpacity>
);

export default function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('12'); 
  
  
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);


  const handleGeneratePassword = () => {
    const passLength = parseInt(length);
    if (isNaN(passLength) || passLength <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập độ dài mật khẩu hợp lệ.');
      return;
    }

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charset = '';
    if (includeLower) charset += lower;
    if (includeUpper) charset += upper;
    if (includeNumber) charset += numbers;
    if (includeSymbol) charset += symbols;

    if (charset === '') {
      Alert.alert('Lỗi', 'Vui lòng chọn ít nhất 1 loại ký tự.');
      setPassword('');
      return;
    }

    let generatedPass = '';
    for (let i = 0; i < passLength; i++) {
      generatedPass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(generatedPass);
  };

  return (
    <LinearGradient
      colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
      style={styles.gradientContainer}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>PASSWORD GENERATOR</Text>

          {/* Ô hiển thị mật khẩu */}
          <View style={styles.passwordDisplay}>
            <Text style={styles.passwordText}>{password}</Text>
          </View>

          {/* Card chứa các tùy chọn */}
          <View style={styles.optionsCard}>
            <View style={styles.optionRow}>
              <Text style={styles.optionLabel}>Password length</Text>
              <TextInput
                style={styles.lengthInput}
                keyboardType="number-pad"
                value={length}
                onChangeText={setLength}
                maxLength={2} // Giới hạn 2 ký tự
              />
            </View>

            <OptionRow
              label="Include lower case letters"
              value={includeLower}
              onValueChange={setIncludeLower}
            />
            <OptionRow
              label="Include upcase letters"
              value={includeUpper}
              onValueChange={setIncludeUpper}
            />
            <OptionRow
              label="Include number"
              value={includeNumber}
              onValueChange={setIncludeNumber}
            />
            <OptionRow
              label="Include special symbol"
              value={includeSymbol}
              onValueChange={setIncludeSymbol}
            />
          </View>

          {/* Nút Generate */}
          <TouchableOpacity
            style={styles.generateButton}
            onPress={handleGeneratePassword}
          >
            <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: { flex: 1 },
  safeArea: { flex: 1 },
  container: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 30,
  },
  passwordDisplay: {
    backgroundColor: COLORS.inputBg,
    width: '100%',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  passwordText: {
    fontSize: 18,
    color: COLORS.text,
  },
  optionsCard: {
    width: '100%',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  optionLabel: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: '500',
  },
  lengthInput: {
    backgroundColor: COLORS.inputLengthBg,
    width: 60,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.inputBg,
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: COLORS.button,
    width: '100%',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});