// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   Image,
// } from 'react-native';
// import React from 'react';
// import {IC_ShoppingCart, IC_Bar, IC_Search} from '../../assets/icons';
// import CUSTOM_COLOR from './src/constants/colors';
// import FONT_FAMILY from './src/constants/fonts';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={styles.background}>
//       {/* BAR */}
//       <>
//         <Image source={IC_Bar} style={styles.bar} resizeMode="contain" />
//       </>
//       {/* Shopping Cart */}
//       <>
//         <Image
//           source={IC_ShoppingCart}
//           style={styles.shoppingCart}
//           resizeMode="contain"
//         />
//       </>
//       {/* Text */}
//       <>
//         <View style={styles.foodTextContainer}>
//           <Text style={styles.foodText}>{'Delicious \nfood for you'}</Text>
//         </View>
//       </>
//       {/* Search bar */}
//       <>
//         <View style={styles.searchBarContainer}>
//           <Image source={IC_Search} resizeMode="contain" style={styles.visor} />
//           <View style={styles.searchTextContainer}>
//             <Text style={styles.searchText}>{'Search'}</Text>
//           </View>
//         </View>
//       </>
//       {/* Menu bar */}
//       <>
//         <ScrollView></ScrollView>
//       </>
//       {/* Food */}
//       <>
//         <ScrollView></ScrollView>
//       </>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: CUSTOM_COLOR.Silver,
//   },
//   bar: {
//     position: 'absolute',
//     top: 74,
//     left: 55,
//   },
//   shoppingCart: {
//     position: 'absolute',
//     left: 350,
//     top: 65,
//   },
//   foodTextContainer: {
//     flex: 1,
//     width: 206,
//     height: 87,
//     position: 'absolute',
//     top: 132,
//     left: 50,
//   },
//   foodText: {
//     fontSize: 34,
//     fontFamily: FONT_FAMILY.Regular,
//     lineHeight: 40.57,
//     fontStyle: 'normal',
//     color: CUSTOM_COLOR.Black,
//     fontWeight: 'bold',
//   },
//   searchBarContainer: {
//     flex: 1,
//     width: 314,
//     height: 60,
//     position: 'absolute',
//     top: 242,
//     left: 50,
//     backgroundColor: CUSTOM_COLOR.SunsetColor,
//     borderRadius: 35,
//   },
//   visor: {
//     position: 'absolute',
//     top: 21,
//     left: 35,
//   },
//   searchTextContainer: {
//     position: 'absolute',
//     top: 20,
//     left: 70,
//   },
//   searchText: {},
// });
