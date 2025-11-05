// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   FlatList, // Import FlatList
//   Alert,
// } from 'react-native';
// import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

// const COLORS = {
//   background: '#F0F0F0',
//   white: '#FFFFFF',
//   text: '#000000',
//   textLight: '#666666',
//   headerBlue: '#5D9CEC',
//   buttonRed: '#D9534F',
// };

// const CHAT_DATA = [
//   {
//     id: '1',
//     title: 'Ca nấu lẩu, nấu mì mini...',
//     shop: 'Shop Devang',
//     image: require('./assets/ca_lau.jpg'), 
//   },
//   {
//     id: '2',
//     title: '1KG KHÔ GÀ BƠ TỎI ...',
//     shop: 'LTD Food',
//     image: require('./assets/kho_ga.jpg'), 
//   },
//   {
//     id: '3',
//     title: 'Xe cần cẩu đa năng',
//     shop: 'Thế giới đồ chơi',
//     image: require('./assets/xe_cau.jpg'),
//   },
//   {
//     id: '4',
//     title: 'Đồ chơi dạng mô hình',
//     shop: 'Thế giới đồ chơi',
//     image: require('./assets/mo_hinh.png'),
//   },
//   {
//     id: '5',
//     title: 'Lãnh đạo giản đơn',
//     shop: 'Minh Long Book',
//     image: require('./assets/lanh_dao.png'),
//   },
//   {
//     id: '6',
//     title: 'Hiểu lòng con trẻ',
//     shop: 'Minh Long Book',
//     image: require('./assets/hieu_long.png'),
//   },
// ];

// const ChatItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Image source={item.image} style={styles.itemImage} /> 
//     <View style={styles.itemInfo}>
//       <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
//       <Text style={styles.itemShop}>Shop <Text style={{fontWeight: 'bold'}}>{item.shop}
//       </Text></Text>
//     </View>
//     <TouchableOpacity 
//       style={styles.chatButton}
//       onPress={() => Alert.alert('Thông báo', `Chat với shop ${item.shop}`)}
//     >
//       <Text style={styles.chatButtonText}>Chat</Text>
//     </TouchableOpacity>
//   </View>
// );

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Quay lại')}>
//           <Ionicons name="arrow-back" size={24} color={COLORS.white} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Chat</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Mở giỏ hàng')}>
//           <AntDesign name="shoppingcart" size={24} color={COLORS.white} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.listContainer}>
//         <Text style={styles.subHeader}>
//           Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
//         </Text>

//         {/* FlatList */}
//         <FlatList
//           data={CHAT_DATA}
//           renderItem={({ item }) => <ChatItem item={item} />}
//           keyExtractor={(item) => item.id}
//           style={styles.flatList}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Mở Menu')}>
//           <Feather name="menu" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Về Trang chủ')}>
//           <AntDesign name="home" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Quay lại')}>
//           <Ionicons name="return-up-back" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   screenTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     padding: 15,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: COLORS.headerBlue,
//     padding: 15,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: COLORS.white,
//   },
//   listContainer: {
//     flex: 1, 
//     backgroundColor: COLORS.white,
//   },
//   subHeader: {
//     padding: 15,
//     fontSize: 14,
//     color: COLORS.text,
//     backgroundColor: '#F5F5F5', 
//   },
//   flatList: {
//     flex: 1,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.background,
//   },
//   itemImage: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//     marginRight: 15,
//     borderRadius: 8,
//     backgroundColor: '#EEEEEE'
//   },
//   itemInfo: {
//     flex: 1, 
//     marginRight: 10,
//   },
//   itemTitle: {
//     fontSize: 16,
//     color: COLORS.text,
//     fontWeight: '500',
//   },
//   itemShop: {
//     fontSize: 14,
//     color: COLORS.textLight,
//   },
//   chatButton: {
//     backgroundColor: COLORS.buttonRed,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   chatButtonText: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: COLORS.headerBlue,
//     paddingVertical: 15,
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
//   Image,
//   FlatList,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { Ionicons, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// const COLORS = {
//   background: '#EAEAEA',
//   white: '#FFFFFF',
//   text: '#000000',
//   textLight: '#666666',
//   headerBlue: '#5D9CEC',
//   starYellow: '#FFD700',
//   priceGreen: '#008000',
// };

// // Dữ liệu giả cho FlatList
// const PRODUCT_DATA = [
//   {
//     id: '1',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/giacChuyen.png'),
//   },
//   {
//     id: '2',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/dayNguon.png'),
//   },
//   {
//     id: '3',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/chuyenDoi2.png'),
//   },
//   {
//     id: '4',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/dauChuyenDoi.png'),
//   },
//   {
//     id: '5',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/carBus.png'),
//   },
//   {
//     id: '6',
//     title: 'Cáp chuyển từ Cổng USB sang PS2...',
//     price: '69.900 đ',
//     discount: '-39%',
//     rating: 5,
//     reviews: 15,
//     image: require('./assets/dauCam.png'),
//   },
// ];

// // Component cho mỗi item sản phẩm
// const ProductItem = ({ item }) => (
//   <TouchableOpacity 
//     style={styles.itemContainer}
//     onPress={() => Alert.alert('Thông báo', `Xem sản phẩm ${item.title}`)}
//   >
//     <Image source={ item.image } style={styles.itemImage} />
//     <View style={styles.itemInfo}>
//       <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
//       <View style={styles.ratingContainer}>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <AntDesign
//             key={star}
//             name="star"
//             size={14}
//             color={item.rating >= star ? COLORS.starYellow : COLORS.textLight}
//           />
//         ))}
//         <Text style={styles.reviewText}>({item.reviews})</Text>
//       </View>
//       <View style={styles.priceContainer}>
//         <Text style={styles.itemPrice}>{item.price}</Text>
//         <Text style={styles.itemDiscount}>{item.discount}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// export default function App() {
//   const [searchText, setSearchText] = useState('Dây cáp usb');

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="light-content" backgroundColor={COLORS.headerBlue} />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Quay lại')}>
//           <Ionicons name="arrow-back" size={24} color={COLORS.white} />
//         </TouchableOpacity>
        
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={20} color={COLORS.textLight} style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={setSearchText}
//           />
//         </View>

//         <TouchableOpacity style={styles.cartContainer} onPress={() => Alert.alert('Thông báo', 'Mở giỏ hàng')}>
//           <AntDesign name="shoppingcart" size={28} color={COLORS.white} />
//           <View style={styles.cartBadge}>
//             <Text style={styles.cartBadgeText}>3</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Mở menu thêm')}>
//           <MaterialCommunityIcons name="dots-horizontal" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//       </View>

//       {/* FlatList dạng lưới */}
//       <FlatList
//         data={PRODUCT_DATA}
//         renderItem={({ item }) => <ProductItem item={item} />}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         style={styles.flatList}
//         contentContainerStyle={styles.flatListContent}
//       />

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Mở Menu')}>
//           <Feather name="menu" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Về Trang chủ')}>
//           <AntDesign name="home" size={28} color={COLORS.white} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Quay lại')}>
//           <Ionicons name="return-up-back" size={28} color={COLORS.white} />
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
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.headerBlue,
//     padding: 10,
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.white,
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   searchIcon: {
//     paddingLeft: 10,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     fontSize: 16,
//   },
//   cartContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   cartBadge: {
//     position: 'absolute',
//     right: -8,
//     top: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: COLORS.white,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   flatList: {
//     flex: 1,
//   },
//   flatListContent: {
//     padding: 5,
//   },
//   itemContainer: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//     margin: 5,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   itemImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//   },
//   itemInfo: {
//     padding: 10,
//   },
//   itemTitle: {
//     fontSize: 14,
//     color: COLORS.text,
//     marginBottom: 5,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   reviewText: {
//     fontSize: 12,
//     color: COLORS.textLight,
//     marginLeft: 5,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: COLORS.priceGreen,
//     marginRight: 10,
//   },
//   itemDiscount: {
//     fontSize: 12,
//     color: COLORS.textLight,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: COLORS.headerBlue,
//     paddingVertical: 15,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// const API_URL = 'https://690ac4671a446bb9cc23c317.mockapi.io/users';

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const json = await response.json();
//       setData(json); 
//     } catch (err) {
//       setError(err); 
//     } finally {
//       setIsLoading(false); 
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Đang tải dữ liệu...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Có lỗi xảy ra: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" />
      
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemEmail}>{item.email}</Text>
//           </View>
//         )}
//         style={styles.flatList}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 15,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   flatList: {
//     flex: 1,
//   },
//   itemContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     marginVertical: 4,
//     marginHorizontal: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   itemEmail: {
//     fontSize: 14,
//     color: '#666666',
//     marginTop: 4,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// const API_URL = 'https://690ac4671a446bb9cc23c317.mockapi.io/users';

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const json = await response.json();
//       setData(json); 
//     } catch (err) {
//       setError(err); 
//     } finally {
//       setIsLoading(false); 
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Đang tải dữ liệu...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Có lỗi xảy ra: {error.message}</Text>
//       </View>
//     );
//   }

//   // Yêu cầu 3 & 4: Hiển thị danh sách ngang
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" />
    
//       <FlatList
//         horizontal={true} 
//         showsHorizontalScrollIndicator={false} 
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           // 2. Sửa style cho item ngang
//           <View style={styles.itemContainer}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemEmail}>{item.email}</Text>
//           </View>
//         )}
//         style={styles.flatList}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 15,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   flatList: {
//     paddingLeft: 10,
//     paddingVertical: 10,
//     flexGrow: 0, // Ngăn FlatList chiếm hết chiều cao
//   },
//   // 3. Style cho item ngang
//   itemContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     marginRight: 10, 
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     width: 200, 
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold', 
//     color: '#333333',
//   },
//   itemEmail: {
//     fontSize: 14,
//     color: '#666666',
//     marginTop: 4,
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ScrollView, 
  TouchableOpacity,
  Image,
  Dimensions, // Để lấy chiều rộng màn hình
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const API_URL = 'https://picsum.photos/v2/list?page=1&limit=20';
const { width } = Dimensions.get('window'); // Chiều rộng màn hình

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleLayout = () => {
    setNumColumns(numColumns === 1 ? 2 : 1);
  };

  const renderHorizontalItem = ({ item }) => (
    <View style={styles.horizontalItem}>
      <Image source={{ uri: item.download_url }} style={styles.horizontalImage} />
      <Text style={styles.horizontalAuthor} numberOfLines={1}>{item.author}</Text>
    </View>
  );

  const renderVerticalItem = ({ item }) => (
    <View style={styles.verticalItem}>
      <Image 
        source={{ uri: item.download_url }} 
        style={styles.verticalImage} 
      />
      <Text style={styles.verticalAuthor}>{item.author}</Text>
    </View>
  );

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
        <Text>Có lỗi xảy ra: {error.message}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Text style={styles.sectionTitle}>Ảnh Nổi Bật</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data.slice(0, 5)} 
          keyExtractor={(item) => item.id}
          renderItem={renderHorizontalItem}
          style={styles.horizontalList}
        />

        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Tất Cả Ảnh</Text>
          <TouchableOpacity onPress={toggleLayout} style={styles.toggleButton}>
            <Ionicons name={numColumns === 1 ? 'grid' : 'list'} size={24} color="#007AFF" />
            <Text style={styles.toggleText}>{numColumns === 1 ? 'Grid View' : 'List View'}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={renderVerticalItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} 
          key={numColumns} // **Rất quan trọng** để buộc render lại
          style={styles.verticalList}
          scrollEnabled={false} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  // Horizontal List
  horizontalList: {
    paddingLeft: 15,
    marginTop: 10,
    flexGrow: 0,
  },
  horizontalItem: {
    width: 150,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  horizontalImage: {
    width: 150,
    height: 100,
  },
  horizontalAuthor: {
    padding: 8,
    fontSize: 12,
    color: '#333',
  },
  // List/Grid Header
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  toggleText: {
    color: '#007AFF',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  // Vertical/Grid List
  verticalList: {
    margin: 10,
  },
  verticalItem: {
    flex: 1, // Chia cột đều
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  verticalImage: {
    width: '100%',
    height: 180,
  },
  verticalAuthor: {
    padding: 10,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#FAFAFA',
  },
});