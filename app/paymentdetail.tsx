import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { useEffect } from "react";

export default function PaymentDetail() {
  
  const { total } = useLocalSearchParams<{ total: string }>();

  useEffect(() => {
    const backAction = () => {
      router.replace("/"); // langsung ganti ke halaman Home
      return true; // cegah default back
    };
  
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  
    return () => backHandler.remove(); // cleanup
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Payment Detail</Text>
        <View style={styles.listContainer}>
          <Text style={styles.value}>${total}</Text>
        </View>
        <Text style={styles.paymentType}>Cash on Delivery</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/PaymentIllustrations.png")}
            style={styles.imageIllustrations}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.backToHomePage}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backToHomePageText}>Back to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontFamily: "MarkaziBold",
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 25,
    fontFamily: "MarkaziSemiBold",
  },
  paymentType: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  imageIllustrations: {
    width: "80%",
    height: 320,
  },
  backToHomePage: {
    backgroundColor: "#F4CE14",
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  backToHomePageText: {
    fontFamily: "MarkaziSemiBold",
    color: "#000000",
    fontSize: 25,
  },
});
