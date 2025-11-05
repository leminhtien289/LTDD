// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';

// const COLORS = {
//   background: '#7ADAF3',
//   text: '#000000', 
//   button: '#F3D94A', 
// };

// export default function App() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.contentContainer}>  
//           <View style={styles.iconCircle} />
//           <Text style={styles.title}>GROW YOUR BUSINESS</Text>
//           <Text style={styles.subtitle}>
//             We will help you to grow your business using online server
//           </Text>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>LOGIN</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>SIGN UP</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1, 
//     backgroundColor: COLORS.background,
//   },
//   contentContainer: {
//     flex: 1, 
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30, 
//   },
//   iconCircle: {
//     width: 150,
//     height: 150,
//     borderRadius: 75, 
//     borderWidth: 12, 
//     borderColor: COLORS.text,
//     marginBottom: 50, 
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 15, 
//   },
//   subtitle: {
//     fontSize: 16,
//     color: COLORS.text,
//     textAlign: 'center',
//     maxWidth: '90%', 
//   },
//   buttonContainer: {
//     flexDirection: 'row', 
//     justifyContent: 'space-around', 
//     width: '100%',
//     paddingHorizontal: 20, 
//     paddingVertical: 30, 
//   },
//   button: {
//     backgroundColor: COLORS.button,
//     paddingVertical: 15,
//     paddingHorizontal: 50,
//     borderRadius: 30, 
//     elevation: 3, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   buttonText: {
//     color: COLORS.text,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient';

// const COLORS = {
//   text: '#000000', 
//   buttonYellow: '#F3D94A', 
//   white: '#FFFFFF',
//   gradientStart: '#7ADAF3', 
//   gradientEnd: '#FFFFFF', 
// };

// export default function App() {
//   return (
//     <LinearGradient
//       colors={[COLORS.gradientStart, COLORS.gradientEnd]}
//       style={styles.gradientContainer}
//     >
//       <StatusBar barStyle="dark-content" />
      
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.contentContainer}>
          
//           <View style={styles.iconCircle} />

//           <Text style={styles.title}>GROW YOUR BUSINESS</Text>

//           <Text style={styles.subtitle}>
//             We will help you to grow your business using online server
//           </Text>
          
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>LOGIN</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>SIGN UP</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.howWeWorkText}>
//             HOW WE WORK?
//           </Text>
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
//   contentContainer: {
//     flex: 1, 
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   iconCircle: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 12,
//     borderColor: COLORS.text,
//     marginBottom: 50,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     maxWidth: '90%',
//   },

//   howWeWorkText: {
//     textAlign: "center",
//     fontSize: 16,
//     color: COLORS.text, 
//     fontWeight: 'bold',
   
//   },

//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around', 
//     width: '100%',
//     paddingHorizontal: 20,
//     paddingVertical: 40, 
//   },
//   button: {
//     backgroundColor: COLORS.buttonYellow,
//     paddingVertical: 15,
//     paddingHorizontal: 50,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   buttonText: {
//     color: COLORS.text,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons, Feather } from '@expo/vector-icons';

// const COLORS = {
//   text: '#000000',
//   buttonYellow: '#F3D94A',
//   inputBackground: '#D9D9D9',
//   iconGray: '#666666',
//   gradientStart: '#7ADAF3',
//   gradientEnd: '#FFFFFF',
// };

// export default function App() {
//   return (
//     <LinearGradient
//       colors={[COLORS.gradientStart, COLORS.gradientEnd]}
//       style={styles.gradientContainer}
//     >
//       <StatusBar barStyle="dark-content" />
      
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.contentContainer}>
          
//           <MaterialIcons 
//             name="lock" 
//             size={150} 
//             color={COLORS.text} 
//             style={styles.lockIcon} 
//           />

//           <Text style={styles.title}>FORGET PASSWORD</Text>

//           <Text style={styles.subtitle}>
//             Provide your account's email for which you want to reset your password
//           </Text>

//           <View style={styles.inputContainer}>
//             <Feather 
//               name="mail" 
//               size={24} 
//               color={COLORS.iconGray} 
//               style={styles.mailIcon} 
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor={COLORS.iconGray}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>NEXT</Text>
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
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   lockIcon: {
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.inputBackground,
//     width: '100%',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//   },
//   mailIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 15,
//     fontSize: 16,
//     color: COLORS.text,
//   },
//   buttonContainer: {
//     width: '100%',
//     paddingHorizontal: 40,
//     paddingVertical: 30,
//   },
//   button: {
//     backgroundColor: COLORS.buttonYellow,
//     paddingVertical: 15,
//     alignItems: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   buttonText: {
//     color: COLORS.text,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const COLORS = {
//   text: '#000000',
//   buttonYellow: '#F3D94A',
//   inputBackground: '#FFFFFF',
//   gradientStart: '#7ADAF3',
//   gradientEnd: '#FFFFFF',
// };

// export default function App() {
//   return (
//     <LinearGradient
//       colors={[COLORS.gradientStart, COLORS.gradientEnd]}
//       style={styles.gradientContainer}
//     >
//       <StatusBar barStyle="dark-content" />
      
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.contentContainer}>
          
//           <Text style={styles.mainTitle}>CODE</Text>

//           <Text style={styles.subTitle}>VERIFICATION</Text>

//           <Text style={styles.instructionText}>
//             Enter ontime password sent on
//             {'\n'}++849092605798
//           </Text>

//           <View style={styles.otpInputContainer}>
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//             <TextInput
//               style={styles.otpBox}
//               maxLength={1}
//               keyboardType="number-pad"
//               caretHidden={true}
//             />
//           </View>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>VERIFY CODE</Text>
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
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   mainTitle: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   subTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   instructionText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 40,
//     lineHeight: 24,
//   },
//   otpInputContainer: {
//     justifyContent:"center",
//     flexDirection: 'row',
//     width: '100%',
//     maxWidth: 300,
//     marginBottom: 40,
//   },
//   otpBox: {
//     width: 45,
//     height: 45,
//     backgroundColor: COLORS.inputBackground,
//     borderWidth: 1,
//     borderColor: '#00000',
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: COLORS.text,
//   },
//   buttonContainer: {
//     width: '100%',
//     paddingHorizontal: 40,
//     paddingVertical: 30,
//   },
//   button: {
//     backgroundColor: COLORS.buttonYellow,
//     paddingVertical: 15,
//     alignItems: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   buttonText: {
//     color: COLORS.text,
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
//   ScrollView,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const COLORS = {
//   background: '#E6F0E3',
//   inputBackground: '#D9E3D6',
//   placeholder: '#5A6656',
//   buttonRed: '#B95A4A',
//   textGray: '#4A4A4A',
//   white: '#FFFFFF',
//   black: '#000000',
// };

// export default function App() {
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [selectedGender, setSelectedGender] = useState(null); // 'male' | 'female'

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>REGISTER</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           placeholderTextColor={COLORS.placeholder}
//           autoCapitalize="words"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Phone"
//           placeholderTextColor={COLORS.placeholder}
//           keyboardType="phone-pad"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor={COLORS.placeholder}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={[styles.input, { flex: 1, marginBottom: 0 }]}
//             placeholder="Password"
//             placeholderTextColor={COLORS.placeholder}
//             secureTextEntry={secureTextEntry}
//           />
//           <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
//             <Feather 
//               name={secureTextEntry ? 'eye' : 'eye-off'} 
//               size={24} 
//               color={COLORS.placeholder} 
//             />
//           </TouchableOpacity>
//         </View>

//         <TextInput
//           style={styles.input}
//           placeholder="Birthday"
//           placeholderTextColor={COLORS.placeholder}
//         />

//         <View style={styles.radioContainer}>
//           <TouchableOpacity 
//             style={styles.radioOption} 
//             onPress={() => setSelectedGender('male')}
//           >
//             <View style={styles.radioOuter}>
//               {selectedGender === 'male' && <View style={styles.radioInner} />}
//             </View>
//             <Text style={styles.radioText}>Male</Text>
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.radioOption} 
//             onPress={() => setSelectedGender('female')}
//           >
//             <View style={styles.radioOuter}>
//               {selectedGender === 'female' && <View style={styles.radioInner} />}
//             </View>
//             <Text style={styles.radioText}>Female</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.registerButton}>
//           <Text style={styles.registerButtonText}>REGISTER</Text>
//         </TouchableOpacity>

//         <Text style={styles.termsText}>
//           When you agree to terms and conditions
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 40,
//     justifyContent: 'center',
//     paddingVertical: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: COLORS.black,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     backgroundColor: COLORS.inputBackground,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     fontSize: 16,
//     color: COLORS.black,
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.inputBackground,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     marginBottom: 30,
//     marginLeft: 10,
//   },
//   radioOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 40,
//   },
//   radioOuter: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: COLORS.black,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: COLORS.black,
//   },
//   radioText: {
//     fontSize: 16,
//     color: COLORS.black,
//   },
//   registerButton: {
//     backgroundColor: COLORS.buttonRed,
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//   },
//   registerButtonText: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   termsText: {
//     fontSize: 12,
//     color: COLORS.textGray,
//     textAlign: 'center',
//     marginBottom: 20,
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
// } from 'react-native';
// import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

// const COLORS = {
//   background: '#C6B062', // Màu vàng/gold
//   inputBackground: '#D9C788', // Màu vàng nhạt cho input
//   text: '#000000',
//   buttonBlack: '#000000',
//   white: '#FFFFFF',
// };

// export default function App() {
//   const [secureTextEntry, setSecureTextEntry] = useState(true);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
//       <View style={styles.container}>
//         <Text style={styles.title}>LOGIN</Text>

//         <View style={styles.inputContainer}>
//           <FontAwesome 
//             name="user-o" 
//             size={24} 
//             color={COLORS.text} 
//             style={styles.icon} 
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             placeholderTextColor={COLORS.text}
//             autoCapitalize="words"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons 
//             name="lock-closed-outline" 
//             size={24} 
//             color={COLORS.text} 
//             style={styles.icon} 
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor={COLORS.text}
//             secureTextEntry={secureTextEntry}
//           />
//           <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
//             <Feather 
//               name={secureTextEntry ? 'eye' : 'eye-off'} 
//               size={24} 
//               color={COLORS.text} 
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>LOGIN</Text>
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
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
//   createAccountText: {
//     fontSize: 16,
//     color: COLORS.text,
//     textAlign: 'center',
//     fontWeight: 'bold',
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
  Image,
} from 'react-native';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';

const COLORS = {
  background: '#FFFFFF',
  headerBackground: '#E0E0E0',
  textGray: '#888888',
  textDark: '#333333',
  buttonBlue: '#5B6EE1',
  white: '#FFFFFF',
  divider: '#5B6EE1',
  socialIcon1: '#50A8DE',
  socialIcon2: '#D6AE59',
  socialIcon3: '#3B5998',
};


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.headerBackground} />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>XMEye</Text>
      </View>
      
      <View style={styles.container}>
        <Image source={require('./assets/image.png')} style={styles.logo} />

        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color={COLORS.textGray} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
            placeholderTextColor={COLORS.textGray}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color={COLORS.textGray} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            placeholderTextColor={COLORS.textGray}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Other Login Methods</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: COLORS.socialIcon1 }]}>
            <AntDesign name="adduser" size={40} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: COLORS.socialIcon2 }]}>
            <FontAwesome name="wifi" size={40} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: COLORS.socialIcon3 }]}>
            <FontAwesome name="facebook-f" size={40} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.headerBackground,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
  headerText: {
    fontSize: 20,
    color: COLORS.textDark,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textGray,
    marginBottom: 25,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: COLORS.textDark,
  },
  loginButton: {
    backgroundColor: COLORS.buttonBlue,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.divider,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: COLORS.divider,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});