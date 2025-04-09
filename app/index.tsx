import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { menuCategories, foodItems } from "@/data/menuData";
import { router } from "expo-router";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderCategoryButtons = () => {
    return (
      <View style={styles.categoryContainer}>
        {menuCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.activeCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.activeCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderFoodItems = () => {
    if (!selectedCategory) return null;

    return (
      <View style={styles.foodContainer}>
        {foodItems[selectedCategory].map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.foodItem}
            onPress={() => 
              router.push({
                pathname: "/food",
                params: {
                  name: item.name,
                  image: Image.resolveAssetSource(item.image).uri,
                  description: item.description,
                  price: item.price.toString(),
                },
              })
            }
          >
            <Image source={item.image} style={styles.foodImage} />
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text
                style={styles.foodDesc}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.description}
              </Text>
              <Text style={styles.foodPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Little Lemon</Text>
        <Text style={styles.location}>Chicago</Text>
        <View style={styles.row}>
          <Text style={styles.description}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Image
            source={require("../assets/images/woman.jpg")}
            style={styles.image}
          />
        </View>

        <TouchableOpacity
        onPress={() => router.push("/reservations")}
        style={styles.button}>
          <Text style={styles.buttonText}>Reserve a table</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.order}>ORDER FOR DELIVERY!</Text>
      {renderCategoryButtons()}
      {renderFoodItems()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#495E57",
    padding: 20,
    paddingBottom: 30,
    paddingTop: 15,
  },
  logo: {
    fontFamily: "MarkaziBold",
    fontSize: 40,
    color: "#FFD700",
  },
  location: {
    fontSize: 30,
    color: "white",
    marginTop: 1,
    fontFamily: "MarkaziSemiBold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    color: "white",
    marginVertical: 10,
    fontFamily: "MarkaziMedium",
    maxWidth: "50%",
    flexShrink: 1,
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "black",
    fontFamily: "MarkaziMedium",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
  order: {
    fontFamily: "MarkaziSemiBold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: "#EDEFEE",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeCategoryButton: {
    backgroundColor: "#F4CE14",
  },
  categoryText: {
    fontFamily: "MarkaziMedium",
    fontSize: 16,
    color: "#495E57",
  },
  activeCategoryText: {
    fontFamily: "MarkaziBold",
    color: "black",
  },
  foodContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 5,
  },
  foodImage: {
    width: 95,
    height: 95,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  foodName: {
    fontSize: 22,
    fontFamily: "MarkaziSemiBold",
  },
  foodDesc: {
    fontSize: 16,
    fontFamily: "Markazi",
    color: "gray",
    flexShrink: 1,
  },
  foodPrice: {
    fontSize: 20,
    fontFamily: "MarkaziSemiBold",
  },
  // separator: {
  //   height: 1,
  //   backgroundColor: '#E8E8E8',
  //   marginHorizontal: 10,
  //   marginVertical: 5,
  // }
});
