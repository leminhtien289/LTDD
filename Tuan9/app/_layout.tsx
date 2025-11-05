// import { Stack } from 'expo-router';
// import React, { useEffect } from 'react';
// import { initDB } from '../utils/database'; // Import hàm initDB

// export default function RootLayout() {

//   // Khởi tạo CSDL khi app layout được load
//   useEffect(() => {
//     initDB()
//       .then(() => console.log('Database initialized'))
//       .catch((err) => console.error('DB Init Error:', err));
//   }, []);

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="list" />
//       <Stack.Screen name="add" />
//     </Stack>
//   );
// }


import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { initDB } from '../utils/database'; // Import hàm initDB

export default function RootLayout() {

  // Khởi tạo CSDL khi app layout được load
  useEffect(() => {
    initDB()
      .then(() => console.log('Database initialized'))
      .catch((err) => console.error('DB Init Error:', err));
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="list" />
      <Stack.Screen name="shop/[id]" />
      <Stack.Screen
        name="order"
        options={{ presentation: 'modal' }} 
      />
    </Stack>
  );
}