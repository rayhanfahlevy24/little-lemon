import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function Checkout() {

  const {
    foodName,
    foodPrice,
    quantity,
    selectedDrink,
    drinkPrice,
  } = useLocalSearchParams();

  const parsedFoodPrice = Number(Array.isArray(foodPrice) ? foodPrice[0] : foodPrice);
  const parsedDrinkPrice = Number(Array.isArray(drinkPrice) ? drinkPrice[0] : drinkPrice);
  const parsedQuantity = Number(Array.isArray(quantity) ? quantity[0] : quantity);

  const [cutlery, setCutlery] = useState(false);

  const foodTotal = Number(foodPrice) * Number(quantity);
  const drinkTotal = Number(drinkPrice);
  const subtotal = foodTotal + drinkTotal;
  const deliveryFee = 2.00;
  const serviceFee = 1.00;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <View style={styles.container}>
    <Text style={styles.cutleryTitle}>Cutlery</Text>
      <View style={styles.cutleryContainer}>
        <Text style={styles.cutleryDesc}>
          Help reduce plastic waste. only ask for cutlery if you need it.
        </Text>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCutlery(!cutlery)}
        >
          <View style={styles.radioOuter}>
            {cutlery && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <Text style={styles.orderText}>Order Summary</Text>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Items</Text>
      </View>
      <View style={styles.itemRow}>
          <Text style={styles.totalItemName}>{quantity} x {foodName}</Text>
          <Text style={styles.totalItemPrice}>${(parsedFoodPrice * parsedQuantity).toFixed(2)}</Text>
      </View>
      <View style={[styles.line, { marginTop: 10 }]} />
      <View style={styles.itemRow}>
          <Text style={styles.totalItemName}>1 x {selectedDrink}</Text>
          <Text style={styles.totalItemPrice}>${(parsedDrinkPrice).toFixed(2)}</Text>
      </View>
      <View style={[styles.line, { marginTop: 10 }]} />
      <View style={styles.priceRow}>
        <Text style={styles.boldText}>Subtotal</Text>
        <Text style={styles.subTotalText}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.deliveryText}>Delivery</Text>
        <Text style={styles.deliveryPriceText}>${deliveryFee.toFixed(2)}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.serviceText}>Service</Text>
        <Text style={styles.servicePriceText}>${serviceFee.toFixed(2)}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPriceText}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => 
          router.push({
            pathname: "/stepone",
            params: { total: total.toFixed(2) },
          })
        }
        style={styles.checkoutButton}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cutleryContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    marginHorizontal: 20,
  },
  cutleryTitle: {
    fontFamily: "MarkaziSemiBold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 15,
  },
  cutleryDesc: {
    fontFamily: "MarkaziMedium",
    fontSize: 18,
    width: "80%",
    color: '#495E57'
  },
  radioButton: {
    alignItems: "flex-end",
    flex: 1,
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#495E57",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#495E57",
  },
  line: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 20,
  },
  orderText: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
  },
  checkoutButton: {
    backgroundColor: "#F4CE14",
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
  checkoutText: {
    fontFamily: "MarkaziSemiBold",
    color: "#000000",
    fontSize: 25,
  },
  section: {
    backgroundColor: "#EDEFEE",
    padding: 7,
    borderRadius: 6,
    marginTop: 8,
  }, 
  sectionHeader: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
    paddingLeft: 14,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: 20,
  },
  totalItemName: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
    marginTop: 15,
  },
  totalItemPrice: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
    marginTop: 15,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginHorizontal: 20,
  },
  boldText: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
    marginTop: 15,
  },
  subTotalText: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 22,
    marginTop: 15,
  },
  deliveryText: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
  },
  deliveryPriceText: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
  },
  serviceText: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
  },
  servicePriceText: {
    fontFamily: 'MarkaziMedium',
    fontSize: 22,
  },
  totalText: {
    fontFamily: 'MarkaziBold',
    fontSize: 25,
  },
  totalPriceText: {
    fontFamily: 'MarkaziBold',
    fontSize: 22,
  }
});
