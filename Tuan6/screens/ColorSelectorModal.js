// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   SafeAreaView
// } from 'react-native';
// import { PRODUCT_DATA, COLOR_LIST } from '../data/products';

// // Import components
// import ColorOption from '../components/ColorOption';
// import ActionButton from '../components/ActionButton';

// export default function ColorSelectorModal({ navigation, route }) {
//   const { currentId } = route.params;
  
//   const [tempSelectedId, setTempSelectedId] = useState(currentId);
//   const product = PRODUCT_DATA[tempSelectedId];

//   const handleDone = () => {
//     navigation.navigate('ProductDetail', { selectedId: tempSelectedId });
//   };

//   return (

//     <TouchableOpacity 
//       style={styles.backdrop} 
//       activeOpacity={1} 
//       onPress={() => navigation.goBack()}
//     >
//       <SafeAreaView style={styles.safeArea}>
//         <TouchableOpacity style={styles.modalCard} activeOpacity={1}>
//           {/* Header của Modal */}
//           <View style={styles.header}>
//             <Image source={{ uri: product.image }} style={styles.thumbImage} />
//             <View style={styles.headerText}>
//               <Text style={styles.title}>Điện thoại Vsmart Joy 3</Text>
//               <Text>Màu: {product.name}</Text>
//               <Text style={styles.price}>{product.price}</Text>
//             </View>
//           </View>
          
//           <Text style={styles.chooseText}>Chọn một màu bên dưới:</Text>

//           <View style={styles.colorList}>
//             {COLOR_LIST.map((color) => (
//               <ColorOption
//                 key={color.id}
//                 colorHex={color.hex}
//                 isSelected={tempSelectedId === color.id}
//                 onPress={() => setTempSelectedId(color.id)}
//               />
//             ))}
//           </View>

//           <ActionButton
//             title="XONG"
//             onPress={handleDone}
//             style={styles.doneButton}
//           />
//         </TouchableOpacity>
//       </SafeAreaView>
//     </TouchableOpacity>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   backdrop: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'flex-end',
//   },
//   safeArea: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   modalCard: {
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#EEE',
//     paddingBottom: 15,
//   },
//   thumbImage: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   headerText: { flex: 1 },
//   title: { fontSize: 16, fontWeight: 'bold' },
//   price: { fontSize: 14, color: '#D9534F', marginTop: 4 },
//   chooseText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   colorList: {
//     flexDirection: 'column',
//   },
//   doneButton: {
//     marginTop: 20,
//   },
// });

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';


import ColorOption from '../components/ColorOption';
import ActionButton from '../components/ActionButton';

export default function ColorSelectorModal({ navigation, route }) {

  const { currentId, allPhones } = route.params;
  
  const [tempSelectedId, setTempSelectedId] = useState(currentId);
  
  const product = allPhones.find(p => p.id === tempSelectedId);

  const colorList = allPhones.map(p => ({
    id: p.id,
    hex: p.colorHex,
  }));

  const handleDone = () => {
    navigation.navigate('ProductDetail', { selectedId: tempSelectedId });
  };

  return (
    <TouchableOpacity 
      style={styles.backdrop} 
      activeOpacity={1} 
      onPress={() => navigation.goBack()}
    >
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.modalCard} activeOpacity={1}>
          <View style={styles.header}>
            <Image source={{ uri: product.image }} style={styles.thumbImage} />
            <View style={styles.headerText}>
              <Text style={styles.title}>Điện thoại Vsmart Joy 3</Text>
              <Text>Màu: {product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>
          </View>
          
          <Text style={styles.chooseText}>Chọn một màu bên dưới:</Text>

          <View style={styles.colorList}>
       
            {colorList.map((color) => (
              <ColorOption
                key={color.id}
                colorHex={color.hex}
                isSelected={tempSelectedId === color.id}
                onPress={() => setTempSelectedId(color.id)}
              />
            ))}
          </View>

          <ActionButton
            title="XONG"
            onPress={handleDone}
            style={styles.doneButton}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  safeArea: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalCard: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 15,
  },
  thumbImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  headerText: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#D9534F', marginTop: 4 },
  chooseText: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
  },
  colorList: {
    flexDirection: 'column',
  },
  doneButton: {
    marginTop: 20,
  },
});