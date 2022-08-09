import React, {useState} from 'react';
import {Text, Image, Dimensions} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import {IMG_VEGETABLE} from '../../assets/images';
import scale from '../../components/scale';
import {FlatList} from 'react-native';
import CUSTOM_COLORS from '../../constants/colors';
import {stopClock} from 'react-native-reanimated';
import {IC_GoBack} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';

const widthDevice = Dimensions.get('window').width;

const arrayImage = [
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
  IMG_VEGETABLE,
];
const FoodInfoScreen = ({navigation}) => {
  const [indexDot, setIndexDot] = useState(0);
  let temp;

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('viewableItems: ' + viewableItems[0].index);
    console.log('changed: ' + changed[0].index);
    console.log('undefine');
    setIndexDot(changed[0].index);
  };
  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });
  const viewabilityConfigCallbackPairs = React.useRef([
    {
      viewabilityConfig: {
        viewAreaCoveragePercentThreshold: 50,
      },
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);

  // setIndex(() => {if (temp != index) return temp;});

  return (
    <View style={styles.viewStyle}>
      {/* Go back button */}
      <View style={styles.goBackContainer}>
        <TouchableOpacity
          hitSlop={styles.hitSlop}
          onPress={() => {
            navigation.goBack();
          }}>
          <IC_GoBack />
        </TouchableOpacity>
      </View>
      <View style={styles.viewFlatlist}>
        <FlatList
          data={arrayImage}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal
          // onScroll={({nativeEvent}) => onchange(nativeEvent)}
          // onViewableItemsChanged={onViewableItemsChanged}
          // viewabilityConfig={viewabilityConfig.current}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          style={styles.foodView}
          renderItem={({item, index}) => {
            return (
              <View style={[styles.viewImage]}>
                <Image
                  source={item}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </View>

      <Text style={styles.textStyle}>{indexDot}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  viewStyle: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.White,
  },
  textStyle: {
    flex: 1,
    fontSize: 50,
    color: 'black',
  },
  viewFlatlist: {
    marginTop: scale(80),
  },
  foodView: {
    // // width: '100%',
    // height: scale(269),
    overflow: 'hidden',

    // backgroundColor: CUSTOM_COLORS.Black,
  },
  viewImage: {
    height: scale(269),
    width: widthDevice,
    alignItems: 'center',

    backgroundColor: CUSTOM_COLORS.White,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
export default FoodInfoScreen;

// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     Image,
//     View,
//     Dimensions,
//     TouchableOpacity,
//     ScrollView,
//   } from 'react-native';

//   import React, {useState} from 'react';
// import CUSTOM_COLORS from '../../constants/colors';
//   import {IMG_VEGETABLE, IMG_FOOD2, IMG_FOOD3} from '../../assets/images';
// import scale from '../../constants/responsive';
//   import {ICON_HEART, IC_SmallCircle, IC_GoBack} from '../../assets/icons';
// import Custom_ButtonOne from '../../components/CustomButtonOne/Custom_ButtonOne'

//   const images = [IMG_VEGETABLE, IMG_FOOD2, IMG_FOOD3];
//   const WIDTH = Dimensions.get('window').width;
//   const HEIGHT = Dimensions.get('window').height;

//   const FoodInfoScreen = ({navigation: {goBack}}) => {

//     const [isChoose, setIsChoose] = useState(false);
//     const onPressHandler = () => {
//       setIsChoose(!isChoose);
//     };
//     const [imgActive, setImgActive] = useState(0);

//     onchange = nativeEvent => {
//       if (nativeEvent) {
//         const slide = Math.ceil(
//           nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
//         );
//         if (slide != imgActive) {
//           setImgActive(slide);
//         }
//       }
//     };
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* Go back button */}
//         <>
//           <View style={styles.goBackContainer}>
//             <TouchableOpacity hitSlop={styles.hitSlop} onPress={() => goBack()}>
//               <IC_GoBack />
//             </TouchableOpacity>
//           </View>
//         </>
//         {/* Heart button */}
//         <>
//           <TouchableOpacity style={styles.heart} onPress={onPressHandler}>
//             <ICON_HEART fill={isChoose === true ? '#FA4A0C' : 'transparent'} />
//           </TouchableOpacity>
//         </>
//         {/* Food swiper */}
//         <>
//         <View style={styles.wrap}>
//           <ScrollView
//             onScroll={({nativeEvent}) => onchange(nativeEvent)}
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             horizontal
//             style={styles.foodView}
//           >
//             {
//               images.map((e, index) =>
//                 <Image
//                   key={e}
//                   resizeMode="stretch"
//                   style={styles.food}
//                   source={e}
//                 />
//               )
//               }
//             </ScrollView>
//             <View style={styles.wrapDot}>
//               {images.map((e, index) => (
//                 <Text
//                   key={e}
//                   style={imgActive == index ? styles.dotActive : styles.dot}>
//                   ●
//                 </Text>
//               ))}
//             </View>
//           </View>
//         </>
//         {/* Food name */}
//         <>
//           <Text style={styles.foodNameActive}>Veggie tomato mix</Text>
//         </>
//         {/* Food price */}
//         <>
//           <Text style={styles.foodPrice}>N1,900</Text>
//         </>
//         {/* Delivery info */}
//         <>
//           <Text style={styles.deliveryInfo}>Delivery info</Text>
//         </>
//         {/* Delivery description */}
//         <>
//           <Text style={styles.deliveryDescription}>
//             {
//               'Delivered between monday aug and thursday 20 \nfrom 8pm to 91:32 pm'
//             }
//           </Text>
//         </>
//         {/* Return policy */}
//         <>
//           <Text style={styles.returnPolicy}>Return policy</Text>
//         </>
//         {/* Return policy description */}
//         <>
//           <Text style={styles.returnPolicyDescription}>
//             {
//               'All our foods are double checked before leaving \nour stores so by any case you found a broken \nfood please contact our hotline immediately.'
//             }
//           </Text>
//         </>
//         {/* button */}
//         <>
//           <Custom_ButtonOne
//             text="Add to cart"
//             textColor={CUSTOM_COLORS.White}
//             color={CUSTOM_COLORS.SunsetOrange}
//             //onPress={() => this.props.navigation.navigate('Login')}
//           />
//         </>
//       </SafeAreaView>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: CUSTOM_COLORS.AthensGray,
//     },
//     wrap: {
//       width: '100%',
//       height: '100%',
//       left: scale(25),
//     },
//     wrapDot: {
//       position: 'absolute',
//       bottom: 0,
//       flexDirection: 'row',
//       alignSelf: 'center',
//       left: scale(168),
//       top: scale(315),
//     },
//     dotActive: {
//       margin: 3,
//       color: CUSTOM_COLORS.SunsetOrange,
//     },
//     dot: {
//       margin: 3,
//       color: '#C4C4C4',
//     },
//     goBackContainer: {
//       position: 'absolute',
//       top: scale(61),
//       left: scale(50),
//     },
//     hitSlop: {
//       top: scale(10),
//       left: scale(10),
//       right: scale(10),
//       bottom: scale(10),
//     },
//     heart: {
//       position: 'absolute',
//       left: scale(341.29),
//       top: scale(42.5),
//     },
//     foodView: {
//       position: 'absolute',
//       width: scale(207),
//       height: scale(241),
//       borderRadius: 360,
//       left: scale(86),
//       top: scale(80.06),
//       overflow: 'hidden',
//     },
//     food: {
//       width: WIDTH * 0.5,
//       height: HEIGHT * 0.25,
//       borderRadius: 360,
//     },
//     foodNameActive: {
//       position: 'absolute',
//       left: scale(82),
//       top: scale(370),
//       // flexDirection: 'row',
//       // alignSelf:'center',
//       // margin: 3,
//       fontWeight: '400',
//       fontSize: scale(28),
//       lineHeight: scale(36),
//       textAlign: 'center',
//       color: CUSTOM_COLORS.Black,
//     },
//     foodName: {
//       position: 'absolute',
//       left: scale(82),
//       top: scale(370),
//       // flexDirection: 'row',
//       // alignSelf:'center',
//       // margin: 3,
//       fontWeight: '400',
//       fontSize: scale(28),
//       lineHeight: scale(36),
//       textAlign: 'center',
//       color: 'transparent',
//     },
//     foodPrice: {
//       color: CUSTOM_COLORS.Vermilion,
//       position: 'absolute',
//       left: scale(170),
//       top: scale(420),
//       fontWeight: '400',
//       fontSize: scale(22),
//       lineHeight: scale(28),
//       textAlign: 'center',
//     },
//     deliveryInfo: {
//       position: 'absolute',
//       left: scale(53),
//       top: scale(480),
//       fontWeight: '400',
//       fontSize: scale(17),
//       lineHeight: scale(22),
//       color: CUSTOM_COLORS.Black,
//     },
//     deliveryDescription: {
//       position: 'absolute',
//       left: scale(53),
//       top: scale(510),
//       fontWeight: '400',
//       fontSize: scale(15),
//       lineHeight: scale(21),
//       opacity: 0.5,
//       color: CUSTOM_COLORS.Black,
//     },
//     returnPolicy: {
//       position: 'absolute',
//       left: scale(53),
//       top: scale(560),
//       fontWeight: '400',
//       fontSize: scale(17),
//       lineHeight: scale(22),
//       color: CUSTOM_COLORS.Black,
//     },
//     returnPolicyDescription: {
//       position: 'absolute',
//       left: scale(53),
//       top: scale(590),
//       fontWeight: '400',
//       fontSize: scale(15),
//       lineHeight: scale(21),
//       opacity: 0.5,
//       color: CUSTOM_COLORS.Black,
//     },
//   });

//   export default FoodInfoScreen;

// import React from 'react';

// import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

// export default function FoodInfoScreen() {

//   const ANIMAL_NAMES = [
//     {
//       id: 1,
//       name: 'Cat',
//     },
//     {
//       id: 2,
//       name: 'Dog',
//     },
//     {
//       id: 3,
//       name: 'Chicken',
//     },
//     {
//       id: 4,
//       name: 'Duck',
//     },
//     {
//       id: 5,
//       name: 'Cow',
//     },
//     {
//       id: 6,
//       name: 'Deer',
//     },
//     {
//       id: 7,
//       name: 'Horse',
//     }

//   ];

//   const ItemRender = ({ name }) => (
//     <View style={styleSheet.item}>
//       <Text style={styleSheet.itemText}>{name}</Text>
//     </View>
//   );

//   const Separator = () => {
//     return (
//       <View
//         style={{
//           height: 50,
//           width: 1,
//           backgroundColor: "white",
//         }}
//       />
//     );
//   }

//   return (
//     <SafeAreaView style={styleSheet.MainContainer}>

//       <Text style={styleSheet.titleText}>
//         Horizontal FlatList in React Native
//       </Text>

//       <FlatList
//         data={ANIMAL_NAMES}
//         renderItem={({ item }) => <ItemRender name={item.name} />}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={Separator}
//         horizontal={true}
//       />

//     </SafeAreaView>
//   );
// }

// const styleSheet = StyleSheet.create({

//   MainContainer: {
//     flex: 1,
//     backgroundColor: 'white'
//   },

//   titleText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 12
//   },

//   item: {
//     padding: 8,
//     backgroundColor: '#00C853',
//     width:420,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

//   itemText: {
//     fontSize: 24,
//     color: 'white',
//     textAlign: 'center'
//   }

// });

// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import CUSTOM_COLORS from '../../constants/colors';
// import { IMG_VEGETABLE , IMG_FOOD2,IMG_FOOD3} from '../../assets/images';

// import scale from '../../components/scale';
// import {ICON_HEART, IC_SmallCircle, IC_GoBack} from '../../assets/icons';
// import Custom_ButtonOne from '../../components/CustomButtonOne/Custom_ButtonOne';
// const images = [IMG_VEGETABLE, IMG_FOOD2, IMG_FOOD3];

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

// const FoodInfoScreen = ({navigation}) => {
//   const [isChoose, setIsChoose] = useState(false);
//   const onPressHandler = () => {
//     setIsChoose(!isChoose);
//   };
//   const [imgActive, setImgActive] = useState(0);

//   onchange = nativeEvent => {
//     if (nativeEvent) {
//       const slide = Math.ceil(
//         nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
//       );
//       if (slide != imgActive) {
//         setImgActive(slide);
//       }
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Go back button */}
//       <>
//         <View style={styles.goBackContainer}>
//           <TouchableOpacity hitSlop={styles.hitSlop} onPress={() => navigation.goBack()}>
//             <IC_GoBack />
//           </TouchableOpacity>
//         </View>
//       </>
//       {/* Heart button */}
//       <>
//         <TouchableOpacity style={styles.heart} onPress={onPressHandler}>
//           <ICON_HEART fill={isChoose === true ? '#FA4A0C' : 'transparent'} />
//         </TouchableOpacity>
//       </>
//       {/* Food swiper */}
//       <>
//       <View style={styles.wrap}>
//         <ScrollView
//           onScroll={({nativeEvent}) => onchange(nativeEvent)}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           horizontal
//           style={styles.foodView}
//         >
//           {
//             images.map((e, index) =>
//               <Image
//                 key={e}
//                 resizeMode="stretch"
//                 style={styles.food}
//                 source={e}
//               />
//             )}
//           </ScrollView>
//           <View style={styles.wrapDot}>
//             {images.map((e, index) => (
//               <Text
//                 key={e}
//                 style={imgActive == index ? styles.dotActive : styles.dot}>
//                 ●
//               </Text>
//             ))}
//           </View>
//         </View>
//       </>
//       {/* Food name */}
//       <>
//         <Text style={styles.foodNameActive}>Veggie tomato mix</Text>
//       </>
//       {/* Food price */}
//       <>
//         <Text style={styles.foodPrice}>N1,900</Text>
//       </>
//       {/* Delivery info */}
//       <>
//         <Text style={styles.deliveryInfo}>Delivery info</Text>
//       </>
//       {/* Delivery description */}
//       <>
//         <Text style={styles.deliveryDescription}>
//           {
//             'Delivered between monday aug and thursday 20 \nfrom 8pm to 91:32 pm'
//           }
//         </Text>
//       </>
//       {/* Return policy */}
//       <>
//         <Text style={styles.returnPolicy}>Return policy</Text>
//       </>
//       {/* Return policy description */}
//       <>
//         <Text style={styles.returnPolicyDescription}>
//           {
//             'All our foods are double checked before leaving \nour stores so by any case you found a broken \nfood please contact our hotline immediately.'
//           }
//         </Text>
//       </>
//       {/* button */}
//       <>
//         <Custom_ButtonOne
//           text="Add to cart"
//           textColor={CUSTOM_COLORS.White}
//           color={CUSTOM_COLORS.SunsetOrange}
//           //onPress={() => this.props.navigation.navigate('Login')}
//         />
//       </>
//     </SafeAreaView>
//   );
// };

// export default FoodInfoScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: CUSTOM_COLORS.AthensGray,
//   },
//   wrap: {
//     width: '100%',
//     height: '100%',
//     left: scale(25),
//   },
//   wrapDot: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     alignSelf: 'center',
//     left: scale(168),
//     top: scale(315),
//   },
//   dotActive: {
//     margin: 3,
//     color: CUSTOM_COLORS.SunsetOrange,
//   },
//   dot: {
//     margin: 3,
//     color: '#C4C4C4',
//   },
//   goBackContainer: {
//     position: 'absolute',
//     top: scale(61),
//     left: scale(50),
//   },
//   hitSlop: {
//     top: scale(10),
//     left: scale(10),
//     right: scale(10),
//     bottom: scale(10),
//   },
//   heart: {
//     position: 'absolute',
//     left: scale(341.29),
//     top: scale(42.5),
//   },
//   foodView: {
//     position: 'absolute',
//     width: scale(207),
//     height: scale(241),
//     borderRadius: 360,
//     left: scale(86),
//     top: scale(80.06),
//     overflow: 'hidden',
//   },
//   food: {
//     width: WIDTH * 0.5,
//     height: HEIGHT * 0.25,
//     borderRadius: 360,
//   },
//   foodNameActive: {
//     position: 'absolute',
//     left: scale(82),
//     top: scale(370),
//     // flexDirection: 'row',
//     // alignSelf:'center',
//     // margin: 3,
//     fontWeight: '400',
//     fontSize: scale(28),
//     lineHeight: scale(36),
//     textAlign: 'center',
//     color: CUSTOM_COLORS.Black,
//   },
//   foodName: {
//     position: 'absolute',
//     left: scale(82),
//     top: scale(370),
//     // flexDirection: 'row',
//     // alignSelf:'center',
//     // margin: 3,
//     fontWeight: '400',
//     fontSize: scale(28),
//     lineHeight: scale(36),
//     textAlign: 'center',
//     color: 'transparent',
//   },
//   foodPrice: {
//     color: CUSTOM_COLORS.Vermilion,
//     position: 'absolute',
//     left: scale(170),
//     top: scale(420),
//     fontWeight: '400',
//     fontSize: scale(22),
//     lineHeight: scale(28),
//     textAlign: 'center',
//   },
//   deliveryInfo: {
//     position: 'absolute',
//     left: scale(53),
//     top: scale(480),
//     fontWeight: '400',
//     fontSize: scale(17),
//     lineHeight: scale(22),
//     color: CUSTOM_COLORS.Black,
//   },
//   deliveryDescription: {
//     position: 'absolute',
//     left: scale(53),
//     top: scale(510),
//     fontWeight: '400',
//     fontSize: scale(15),
//     lineHeight: scale(21),
//     opacity: 0.5,
//     color: CUSTOM_COLORS.Black,
//   },
//   returnPolicy: {
//     position: 'absolute',
//     left: scale(53),
//     top: scale(560),
//     fontWeight: '400',
//     fontSize: scale(17),
//     lineHeight: scale(22),
//     color: CUSTOM_COLORS.Black,
//   },
//   returnPolicyDescription: {
//     position: 'absolute',
//     left: scale(53),
//     top: scale(590),
//     fontWeight: '400',
//     fontSize: scale(15),
//     lineHeight: scale(21),
//     opacity: 0.5,
//     color: CUSTOM_COLORS.Black,
//   },
// });
