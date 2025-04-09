import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {

  const [loaded] = useFonts({
    Markazi: require('../assets/fonts/MarkaziText.ttf'),
    MarkaziMedium: require('../assets/fonts/MarkaziText-Medium.ttf'),
    MarkaziSemiBold: require('../assets/fonts/MarkaziText-SemiBold.ttf'),
    MarkaziBold: require('../assets/fonts/MarkaziText-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      console.log('Fonts loaded');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="food" options={{ headerShown: false }} />
      <Stack.Screen name="reservations" options={{ headerShown: false }} />
      <Stack.Screen name="checkout" options={{ headerShown: false }} />
      <Stack.Screen name="stepone" options={{ headerShown: false }} />
      <Stack.Screen name="reservationsdetail" options={{ headerShown: false }} />
      <Stack.Screen name="paymentdetail" options={{ headerShown: false }} />
    </Stack>
  )
}
