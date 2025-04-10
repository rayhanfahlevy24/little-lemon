import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";

type DrinkOption = {
  name: string;
  price: number;
};

export default function Food() {
  const { name, image, description, price } = useLocalSearchParams();

  const basePrice = parseFloat(price as string) || 0;
  const [quantity, setQuantity] = useState(1);
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption | null>(null);

  const drinks: DrinkOption[] = [
    { name: "Mineral Water", price: 1.0 },
    { name: "Ice Tea", price: 2.0 },
    { name: "Lemon Tea", price: 3.0 },
  ];

  const selectedDrinkPrice = selectedDrink !== null ? selectedDrink.price : 0;

  const totalPrice = basePrice * quantity + selectedDrinkPrice;

  const router = useRouter();

  const handleAddToCart = () => {
    if (!selectedDrink) {
      alert("Please select a drink before proceeding.");
      return;
    }

    router.push({
      pathname: "/checkout",
      params: {
        foodName: name,
        foodPrice: price.toString(),
        quantity: quantity.toString(),
        selectedDrink: selectedDrink?.name,
        drinkPrice: selectedDrink?.price.toString(),
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image as string }} style={styles.images} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.add}>Add Drink</Text>
      {drinks.map((drink, index) => (
        <View key={drink.name}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setSelectedDrink(drink)}
          >
            <Text style={styles.radioLabel}>{drink.name}</Text>

            <View style={styles.rightSection}>
              <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
              <View
                style={[
                  styles.radioCircle,
                  selectedDrink?.name === drink.name &&
                    styles.radioCircleSelectedBorder,
                ]}
              >
                {selectedDrink?.name === drink.name && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          {index !== drinks.length - 1 && <View style={styles.divider} />}
        </View>
      ))}

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          <Text style={styles.quantityBtn}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
          <Text style={styles.quantityBtn}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addText}>Add for ${totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  images: {
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontFamily: "MarkaziBold",
    marginBottom: 10,
    marginLeft: 20,
  },
  description: {
    fontFamily: "MarkaziMedium",
    fontSize: 18,
    color: "#495E57",
    marginHorizontal: 20,
  },
  add: {
    fontFamily: "MarkaziSemiBold",
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
  },
  radioRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 20,
  },
  radioLabel: {
    fontSize: 22,
    color: "#495E57",
    fontFamily: "MarkaziMedium",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  drinkPrice: {
    fontFamily: "MarkaziMedium",
    fontSize: 20,
    color: "#495E57",
    marginRight: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#495E57",
    justifyContent: "center",
    alignItems: "center",
  },
  radioCircleSelectedBorder: {
    borderColor: "#495E57",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#495E57",
  },
  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  quantityBtn: {
    fontSize: 50,
    paddingHorizontal: 20,
    fontFamily: "MarkaziMedium",
  },
  quantityText: {
    fontSize: 40,
    fontFamily: "MarkaziMedium",
    marginHorizontal: 15,
  },
  addButton: {
    backgroundColor: "#F4CE14",
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 20,
  },
  addText: {
    fontFamily: "MarkaziSemiBold",
    color: "#000000",
    fontSize: 25,
  },
});
