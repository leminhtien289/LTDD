import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Ẩn header cho tất cả các màn hình
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" />
      <Stack.Screen name="list" />
      <Stack.Screen name="add" /> */}

      <Stack.Screen name="index" />
      <Stack.Screen
        name="colorModal"
        options={{
          presentation: 'transparentModal', // Hiển thị dạng modal trong suốt
          animation: 'fade', // Hiệu ứng
        }}
      />
    </Stack>
  );
}