// import React from "react";
// import {
//   Dimensions,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import {
//   FlatList,
//   ScrollView,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
// } from "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import COLORS from "../../consts/colors";
// import categories from "../../consts/categories";
// import pina from "../../consts/pina";

// const { width } = Dimensions.get("screen");
// const cardWidth = width / 2 - 20;

// const HomeScreen = ({ navigation }) => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

//   const ListCategories = () => {
//     return (
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={style.categoriesListContainer}
//       >
//         {categories.map((category, index) => (
//           <TouchableOpacity
//             key={index}
//             activeOpacity={0.8}
//             onPress={() => setSelectedCategoryIndex(index)}
//           >
//             <View
//               style={{
//                 backgroundColor:
//                   selectedCategoryIndex == index
//                     ? COLORS.primary
//                     : COLORS.secondary,
//                 ...style.categoryBtn,
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 15,
//                   fontWeight: "bold",
//                   alignItems: "center",
//                   color:
//                     selectedCategoryIndex == index
//                       ? COLORS.white
//                       : COLORS.primary,
//                 }}
//               >
//                 {category.name}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     );
//   };
//   const Card = ({ pina }) => {
//     return (
//       <TouchableHighlight
//         underlayColor={COLORS.white}
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate("DetailsScreen", pina)}
//       >
//         <View style={style.card}>
//           <View style={{ alignItems: "center", top: -40 }}>
//             <Image
//               source={pina.image}
//               style={{ height: 120, width: 120, resizeMode: "contain" }}
//             />
//           </View>
//           <View
//             style={{
//               marginHorizontal: 20,
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//               {pina.name}
//             </Text>
//             <View style={style.iconContainer}>
//               <Icon name="favorite-border" color={COLORS.primary} size={15} />
//             </View>
//           </View>
//           <View
//             style={{
//               marginTop: 10,
//               marginHorizontal: 20,
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//               ${pina.price}
//             </Text>
//             <View style={style.addToCartBtn}>
//               <Icon name="add" size={20} color={COLORS.white} />
//             </View>
//           </View>
//         </View>
//       </TouchableHighlight>
//     );
//   };
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//       <View
//         style={{
//           justifyContent: "center",
//           paddingLeft: 20,
//           paddingTop: 15,
//         }}
//       >
//         <Text style={{ fontSize: 25, fontWeight: "bold" }}>
//           The world's Best Bike
//         </Text>
//       </View>
//       <View>
//         <ListCategories />
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         numColumns={2}
//         data={pina}
//         renderItem={({ item }) => <Card pina={item} />}
//       />
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   header: {
//     marginTop: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },
//   inputContainer: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     flexDirection: "row",
//     backgroundColor: COLORS.light,
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   sortBtn: {
//     width: 50,
//     height: 50,
//     marginLeft: 10,
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   categoriesListContainer: {
//     paddingVertical: 30,
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   categoryBtn: {
//     height: 45,
//     width: 120,
//     marginRight: 7,
//     borderRadius: 30,
//     alignItems: "center",
//     paddingHorizontal: 5,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   card: {
//     height: 220,
//     width: cardWidth,
//     marginHorizontal: 10,
//     marginBottom: 20,
//     marginTop: 50,
//     borderRadius: 15,
//     elevation: 13,
//     backgroundColor: COLORS.white,
//   },
//   addToCartBtn: {
//     height: 30,
//     width: 30,
//     borderRadius: 20,
//     backgroundColor: COLORS.primary,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default HomeScreen;
