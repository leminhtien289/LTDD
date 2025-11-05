// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import các màn hình
// import ProductDetailScreen from './screens/ProductDetailScreen';
// import ColorSelectorModal from './screens/ColorSelectorModal';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false, 
//         }}
//       >
//         {/* Nhóm màn hình chính */}
//         <Stack.Group>
//           <Stack.Screen
//             name="ProductDetail"
//             component={ProductDetailScreen}
//           />
//         </Stack.Group>
        
//         {/* Nhóm màn hình Modal (trượt từ dưới lên) */}
//         <Stack.Group 
//           screenOptions={{ 
//             presentation: 'transparentModal', // Modal trong suốt
//           }}
//         >
//           <Stack.Screen
//             name="ColorSelectorModal"
//             component={ColorSelectorModal}
//           />
//         </Stack.Group>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   TextInput,
//   Image,
//   StatusBar,
// } from 'react-native';


// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // a. Màn hình Home (Hiển thị FlatList)
// const HomeScreen = () => {
//   const data = [
//     { id: '1', name: 'Nguyễn Văn A', email: 'a@example.com' },
//     { id: '2', name: 'Trần Thị B', email: 'b@example.com' },
//     { id: '3', name: 'Lê Văn C', email: 'c@example.com' },
//     { id: '4', name: 'Phạm Thị D', email: 'd@example.com' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Danh sách người dùng</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text>{item.email}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// // b. Màn hình Search (Có TextInput)
// const SearchScreen = () => {
//   const [keyword, setKeyword] = useState('');

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Tìm kiếm</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Nhập từ khóa..."
//         value={keyword}
//         onChangeText={setKeyword}
//       />
//     </SafeAreaView>
//   );
// };

// // c. Màn hình Profile (Avatar + Name)
// const ProfileScreen = () => {
//   return (
//     <SafeAreaView style={[styles.container, styles.profileContainer]}>
//       <Text style={styles.title}>Thông tin cá nhân</Text>
//       <Image
//         source={{ uri: 'https://i.imgur.com/gTj6p6e.png' }} // Ảnh placeholder
//         style={styles.avatar}
//       />
//       <Text style={styles.name}>User 01</Text>
//       <Text>user01@email.com</Text>
//     </SafeAreaView>
//   );
// };


// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar barStyle="dark-content" />
//       <Tab.Navigator
//         // Cấu hình chung cho tất cả các tab
//         screenOptions={({ route }) => ({
//           // 3. Hàm cài đặt icon
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Search') {
//               iconName = focused ? 'search' : 'search-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             // Trả về component icon
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           headerShown: false, // Ẩn header của mỗi tab
//         })}
//       >
//         {/* Khai báo 3 màn hình */}
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ title: 'Trang chủ' }} // Tên hiển thị trên tab
//         />
//         <Tab.Screen 
//           name="Search" 
//           component={SearchScreen} 
//           options={{ title: 'Tìm kiếm' }}
//         />
//         <Tab.Screen 
//           name="Profile" 
//           component={ProfileScreen} 
//           options={{ title: 'Hồ sơ' }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     margin: 20,
//     textAlign: 'center',
//   },
//   // Home Screen
//   item: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     marginVertical: 4,
//     marginHorizontal: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   // Search Screen
//   input: {
//     height: 50,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     marginHorizontal: 16,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   // Profile Screen
//   profileContainer: {
//     alignItems: 'center',
//     paddingTop: 40,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#E0E0E0',
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';


// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';


// const PRODUCTS = [
//   { id: '1', name: 'Sản phẩm A', price: '100.000 đ', description: 'Đây là mô tả cho Sản phẩm A.' },
//   { id: '2', name: 'Sản phẩm B', price: '250.000 đ', description: 'Đây là mô tả cho Sản phẩm B.' },
//   { id: '3', name: 'Sản phẩm C', price: '500.000 đ', description: 'Đây là mô tả cho Sản phẩm C.' },
//   { id: '4', name: 'Sản phẩm D', price: '1.200.000 đ', description: 'Đây là mô tả cho Sản phẩm D.' },
// ];


// // (Tab 1) Màn hình danh sách sản phẩm
// function ProductListScreen({ favorites, setFavorites }) {

//   const navigation = useNavigation();

//   const toggleFavorite = (id) => {
//     if (favorites.includes(id)) {
//       setFavorites(favorites.filter(favId => favId !== id)); 
//     } else {
//       setFavorites([...favorites, id]); 
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isFavorite = favorites.includes(item.id);
    
//     return (
//       <TouchableOpacity 
//         style={styles.itemContainer}
//         onPress={() => navigation.navigate('ProductDetails', { 
//           productId: item.id 
//         })}
//       >
//         <View style={styles.itemInfo}>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemPrice}>{item.price}</Text>
//         </View>
//         <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
//           <Ionicons 
//             name={isFavorite ? 'heart' : 'heart-outline'} 
//             size={24} 
//             color="tomato" 
//           />
//         </TouchableOpacity>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={PRODUCTS}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </SafeAreaView>
//   );
// }

// // (Tab 2) Màn hình yêu thích
// function FavoritesScreen({ favorites }) {

//   const favoriteProducts = PRODUCTS.filter(product => 
//     favorites.includes(product.id)
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {favoriteProducts.length === 0 ? (
//         <View style={styles.centerContainer}>
//           <Text>Chưa có sản phẩm yêu thích nào.</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={favoriteProducts}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.itemContainer}>
//               <View style={styles.itemInfo}>
//                 <Text style={styles.itemName}>{item.name}</Text>
//                 <Text style={styles.itemPrice}>{item.price}</Text>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// // (Stack Screen 2) Màn hình chi tiết sản phẩm
// function ProductDetailsScreen({ route }) {

//   const { productId } = route.params;
//   const product = PRODUCTS.find(p => p.id === productId);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.detailContainer}>
//         <Text style={styles.detailTitle}>{product.name}</Text>
//         <Text style={styles.detailPrice}>{product.price}</Text>
//         <Text style={styles.detailDescription}>{product.description}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }


// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // (Stack Screen 1) Bộ điều hướng Tab
// function HomeTabs() {
//   // Nâng state (trạng thái) yêu thích lên component cha của 2 tab
//   const [favorites, setFavorites] = useState([]);

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName = route.name === 'Products' ? 'list' : 'heart';
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Products" options={{ title: 'Sản phẩm' }}>
//         {/* Truyền state và hàm set state xuống cho Tab 1 */}
//         {() => <ProductListScreen favorites={favorites} setFavorites={setFavorites} />}
//       </Tab.Screen>
//       <Tab.Screen name="Favorites" options={{ title: 'Yêu thích' }}>
//         {/* Truyền state xuống cho Tab 2 */}
//         {() => <FavoritesScreen favorites={favorites} />}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// }

// // Bộ điều hướng chính của App
// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar barStyle="dark-content" />
//       <Stack.Navigator>
//         {/* Màn hình 1 là HomeTabs (chứa 2 tab) */}
//         <Stack.Screen 
//           name="Home" 
//           component={HomeTabs} 
//           options={{ headerShown: false }} // Ẩn header của Stack
//         />
//         {/* Màn hình 2 là Chi tiết (sẽ đè lên trên) */}
//         <Stack.Screen 
//           name="ProductDetails" 
//           component={ProductDetailsScreen}
//           options={{ title: 'Chi tiết sản phẩm' }} // Tự động có nút Back
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   centerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Item trong FlatList
//   itemContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     marginVertical: 4,
//     marginHorizontal: 16,
//     borderRadius: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   itemInfo: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#666',
//   },
//   // Màn hình chi tiết
//   detailContainer: {
//     padding: 20,
//   },
//   detailTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   detailPrice: {
//     fontSize: 20,
//     color: 'tomato',
//     marginBottom: 15,
//   },
//   detailDescription: {
//     fontSize: 16,
//   },
// });


import 'react-native-gesture-handler';

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Switch, // Import Switch
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// a. Màn hình Home (hiển thị text đơn giản)
// Thêm prop 'navigation' để có thể dùng nút bấm mở menu
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Màn hình Home</Text>
        <Text style={styles.text}>Nội dung trang chủ.</Text>
      </View>
    </SafeAreaView>
  );
}

// b. Màn hình Profile (Avatar + Name)
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hồ sơ cá nhân</Text>
        <Image
          source={{ uri: 'https://i.imgur.com/gTj6p6e.png' }} 
          style={styles.avatar}
        />
        <Text style={styles.name}>Tên Người Dùng</Text>
      </View>
    </SafeAreaView>
  );
}

// c. Màn hình Settings (Switch bật/tắt)
function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cài đặt</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.text}>Cho phép thông báo</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.text}>Chế độ ban đêm</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator 
        initialRouteName="Home"
        // Cấu hình chung
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F5F5F5',
          },
          headerTintColor: '#000',
        }}
      >
        {/* Khai báo 3 màn hình */}
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Trang chủ' }}
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Hồ sơ' }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Cài đặt' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
  // Profile Screen
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0E0E0',
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Settings Screen
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
});