import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    Markazi: require("../assets/fonts/MarkaziText.ttf"),
    MarkaziMedium: require("../assets/fonts/MarkaziText-Medium.ttf"),
    MarkaziSemiBold: require("../assets/fonts/MarkaziText-SemiBold.ttf"),
    MarkaziBold: require("../assets/fonts/MarkaziText-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      console.log("Fonts loaded");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar  
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="food" />
        <Stack.Screen name="reservations" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="stepone" />
        <Stack.Screen name="reservationsdetail" />
        <Stack.Screen name="paymentdetail" />
      </Stack>
    </>
  );
}
