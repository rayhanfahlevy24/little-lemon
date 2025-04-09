import { ImageSourcePropType } from 'react-native';

export type MenuCategory = {
    id: string;
    name: string;
  };

export type FoodItem = {
    id: string;
    name: string;
    image: ImageSourcePropType; 
    description: string;
    price: number;
  };

export type FoodItemsType = {
    [key: string]: FoodItem[];
  };

export const menuCategories: MenuCategory[] = [
    { id: "launch", name: "Launch" },
    { id: "mains", name: "Mains" },
    { id: "dessert", name: "Dessert" },
    { id: "a_la_carte", name: "A La Carte" },
  ];
  
  export const foodItems: FoodItemsType = {
    launch: [
      {
        id: "1",
        name: "Pancakes",
        image: require("../assets/images/Pancakes.jpg"),
        description: "Fluffy pancakes with maple syrup, served warm with a touch of butter. Perfect for your morning cravings. Comes with side fruits and honey drizzle. Tastes like a cozy morning hug.",
        price: 5.99,
      },
      {
        id: "2",
        name: "Omelette",
        image: require("../assets/images/Omelette.jpg"),
        description: "Cheese and ham omelette made fresh with farm eggs, herbs, and melted cheddar. Served with toast and cherry tomatoes. A hearty way to start your day. Savory and satisfying bite in every piece.",
        price: 6.99,
      },
      {
        id: "3",
        name: "Avocado Toast",
        image: require("../assets/images/Avocado.jpg"),
        description: "Crunchy toast with mashed avocado, poached eggs, sesame seeds, and microgreens. Sprinkled with chili flakes and a dash of lemon. Light, healthy, and deliciously filling. A brunch favorite!",
        price: 7.99,
      },
      {
        id: "4",
        name: "Turkey Pesto Panini",
        image: require("../assets/images/TurkeyPesto.jpg"),
        description: "A toasted panini filled with slices of smoked turkey, rich basil pesto, and melted mozzarella cheese. Served warm for a perfect midday meal. Great with a side of greens or chips.",
        price: 7.99,
      },
      {
        id: "5",
        name: "Smoked Tuna Salad",
        image: require("../assets/images/SmokedTunaSalad.jpg"),
        description: "A refreshing bowl featuring smoked tuna chunks, boiled egg halves, sweet corn, and cherry tomatoes. Tossed with mixed greens and lemon vinaigrette. Perfect for a light yet filling lunch.",
        price: 6.99,
      },
    ],
    mains: [
      {
        id: "6",
        name: "Steak",
        image: require("../assets/images/Steak.jpg"),
        description: "Juicy grilled steak cooked to perfection with garlic butter sauce, served with mashed potatoes and sautéed vegetables. Full of flavor and tenderness in every bite. Great for meat lovers!",
        price: 15.99,
      },
      {
        id: "7",
        name: "Chicken",
        image: require("../assets/images/Chicken.jpg"),
        description: "Grilled chicken breast marinated with herbs, served with steamed rice and a side salad. Light, protein-rich, and packed with nutrition. A meal that keeps you energized all day.",
        price: 12.99,
      },
      {
        id: "8",
        name: "Pasta",
        image: require("../assets/images/Pasta.jpg"),
        description: "Classic pasta tossed in tomato basil sauce, topped with parmesan and fresh herbs. Includes garlic bread on the side. Rich in flavor and made with love. Comfort food at its finest.",
        price: 10.99,
      },
      {
        id: "9",
        name: "Beef Kofta",
        image: require("../assets/images/BeefKofta.jpg"),
        description: "Grilled lamb kofta seasoned with Middle Eastern spices, served over herbed rice with a mint yogurt dip. Each bite is juicy, flavorful, and aromatic. A hearty plate that satisfies meat lovers.",
        price: 11.49,
      },
      {
        id: "10",
        name: "Thai Basil Chicken",
        image: require("../assets/images/ThaiBasilChicken.jpg"),
        description: "Ground chicken stir-fried with garlic, chilies, and Thai basil leaves for an intense aroma. Comes with steamed white rice on the side. A flavorful and spicy main course option.",
        price: 9.99,
      },
    ],
    dessert: [
      {
        id: "11",
        name: "Cheesecake",
        image: require("../assets/images/Cheesecake.jpg"),
        description: "Creamy cheesecake with a crunchy biscuit base, topped with berry compote and whipped cream. A perfect blend of sweet and tangy. Melts in your mouth and satisfies your sweet tooth.",
        price: 8.99,
      },
      {
        id: "12",
        name: "Chocolate Cake",
        image: require("../assets/images/Chocolate.jpg"),
        description: "Rich and moist chocolate cake layered with smooth ganache and chocolate chips. Each bite bursts with cocoa goodness. Perfect for chocolate lovers. Treat yourself to a slice of joy.",
        price: 9.99,
      },
      {
        id: "13",
        name: "Tiramisu",
        image: require("../assets/images/Tiramisu.jpg"),
        description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream. Dusted with cocoa powder on top. Light, creamy, and dreamy. Perfect ending to any meal.",
        price: 10.99,
      },
      {
        id: "14",
        name: "Biscoff",
        image: require("../assets/images/Biscoff.jpg"),
        description: "Creamy cheesecake layered on a Biscoff cookie crust, topped with melted cookie butter and crumbs. Sweet, rich, and perfect with a coffee. A modern twist on classic cheesecake lovers' favorite.",
        price: 4.49,
      },
      {
        id: "15",
        name: "Strawberry Mousse",
        image: require("../assets/images/StrawberryMousse.jpg"),
        description: "Light strawberry mousse with real fruit chunks, topped with whipped cream and mint leaves. Smooth, airy texture with a burst of berry flavor. Great for refreshing your palate after a meal.",
        price: 3.99,
      },
    ],
    a_la_carte: [
      {
        id: "16",
        name: "French Fries",
        image: require("../assets/images/FrenchFries.jpg"),
        description: "Golden and crispy fries served with ketchup and mayo. Lightly salted and perfect for snacking. Loved by kids and adults alike. Great on its own or as a side dish.",
        price: 3.99,
      },
      {
        id: "17",
        name: "Chicken Wings",
        image: require("../assets/images/ChickenWings.jpg"),
        description: "Spicy chicken wings marinated in tangy sauce, baked to perfection and served with ranch dip. Perfect as a starter or main. Crispy outside, juicy inside. Always a crowd favorite.",
        price: 5.99,
      },
      {
        id: "18",
        name: "Caesar Salad",
        image: require("../assets/images/CaesarSalad.jpg"),
        description: "Fresh romaine lettuce tossed with Caesar dressing, parmesan, and crunchy croutons. Add chicken or shrimp for extra protein. Light and refreshing. A classic salad choice anytime.",
        price: 6.99,
      },
      {
        id: "19",
        name: "Spicy Edamame",
        image: require("../assets/images/SpicyEdamame.jpg"),
        description: "Warm edamame pods tossed in garlic and chili oil. A little salty, a little spicy, a lot addicting. A quick and healthy snack to start your meal. Served fresh and full of umami flavor.",
        price: 2.49,
      },
      {
        id: "20",
        name: "Crispy Chicken Skin",
        image: require("../assets/images/CrispyChickenSkin.jpg"),
        description: "Golden-brown chicken skin, fried until ultra crispy. Sprinkled with seasoning and served with sweet chili sauce. A crunchy treat that’s perfect for sharing. Indulgent, savory, and dangerously good.",
        price: 2.99,
      },
    ],
  };