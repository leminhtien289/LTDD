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
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Cafe world</Text>
        <Image
          source={require('../assets/images/cafe1.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/images/cafe2.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/list')}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: '80%',
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#50A8DE',
    padding: 18,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});