import React from "react";
import { Text  } from "react-native-svg";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const HomeScreen = ()=>
{
    return(
    <View style={styles.viewStyle}>
        
    </View>
    );

};
const styles=StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: 'red',
    },
    textStyle:{
        color: 'red'

    },
});
export default HomeScreen;



// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     TouchableOpacity,
//   } from 'react-native';
//   import React, {Component} from 'react';
//   import CUSTOM_COLORS from '../../constants/colors';
//   import Custom_SearchBar from '../HomeScreen/components/Custom_SearchBar';
//   import FONT_FAMILY from '../../constants/font';
//   import {
//     IC_Clock,
//     IC_Home,
//     IC_User,
//     IC_Cart,
//     IC_Menu,
//   } from '../../assets/icons';
//   //import scale from '../../../responsive';
//   import scale from '../../constants/responsive';
//   //import Custom_FoodScrollView from '../home2/components/Custom_FoodScrollView';
//   import Custom_FoodScrollView from './components/Custom_FoodScrollView';
//   //import Custom_CategoryScrollView from '../home2/components/Custom_CategoryScrollView';
//   import Custom_CategoryScrollView from './components/Custom_CategoryScrollView';

//   export default class HomeScreen extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         nav_selected: 'Home',
//       };
//     }
//     render() {
//       return (
//         <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
//           <></>
//           {/* Icon Menu */}
//           <TouchableOpacity style={[styles.iconContainer, styles.icon_menu]}>
//             <IC_Menu />
//           </TouchableOpacity>
  
//           <></>
//           {/* Icon Shopping */}
//           <TouchableOpacity style={[styles.iconContainer, styles.ic_cart]}>
//             <IC_Cart />
//           </TouchableOpacity>
//           <></>
//           {/* Title */}
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
//           </View>
//           <></>
//           {/* Search Box */}
//           <Custom_SearchBar
//             placeholderText={'Search'}
//             placeholderColor={CUSTOM_COLORS.Black}
//             style={styles.searchInput}
//             hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
//           />
//           <></>
//           {/* See more */}
//           <TouchableOpacity style={styles.seeMore}>
//             <Text style={styles.textSeeMore}>{'see more'}</Text>
//           </TouchableOpacity>
//           <></>
//           {/* Foods */}
//           <Custom_FoodScrollView style={{top: scale(435), position: 'absolute'}} />
//           <Custom_CategoryScrollView />
//           <></>
//           {/* Button Line */}
//           <View style={styles.footContainer}>
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({nav_selected: 'Home'});
//               }}>
//               <IC_Home
//                 fill={this.state.nav_selected === 'Home' ? '#FA4A0C' : '#ADADAF'}
//               />
//             </TouchableOpacity>
//             {/* <TouchableOpacity
//               onPress={() => {
//                 this.setState({nav_selected: 'Heart'});
//               }}>
//               <IC_Heart
//                 fill={this.state.nav_selected === 'Heart' ? '#FA4A0C' : '#ADADAF'}
//               />
//             </TouchableOpacity> */}
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({nav_selected: 'User'});
//               }}>
//               <IC_User
//                 fill={this.state.nav_selected === 'User' ? '#FA4A0C' : '#ADADAF'}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({nav_selected: 'Clock'});
//               }}>
//               <IC_Clock
//                 fill={this.state.nav_selected === 'Clock' ? '#FA4A0C' : '#ADADAF'}
//               />
//             </TouchableOpacity>
//           </View>
  
//         </SafeAreaView>
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: CUSTOM_COLORS.Concreate,
//     },
//     iconContainer: {
//       height: scale(25),
//     },
//     icon_menu: 
//     {
//       position: 'absolute',
//       marginTop: scale(74),
//       marginLeft: scale(55),
//     },
//     ic_cart: {
//       position: 'absolute',
//       marginTop: scale(74),
//       marginLeft: scale(300),
//     },
//     menuContainer: {
//       position: 'absolute',
//       borderStyle: 'solid',
//       borderWidth: 2,
//       left: scale(54.6),
//       top: scale(74),
//     },
//     shoppingContainer: {
//       position: 'absolute',
//       left: scale(349),
//       top: scale(65),
//       opacity: scale(0.7),
//     },
//     titleContainer: {
//       width: scale(300),
//       height: scale(82),
//       top: scale(132),
//       left: scale(50),
//       position: 'absolute',
//     },
//     title: {
//       color: CUSTOM_COLORS.Black,
//       fontFamily: FONT_FAMILY.SF_Pro_Rounded,
//       fontSize: scale(34),
//       position: 'absolute',
//       top: scale(-10),
//     },
//     searchInput: {
//       opacity: 0.5,
//       color: CUSTOM_COLORS.Black,
//       top: scale(242),
//       left: scale(50),
//       position: 'absolute',
//     },
//     seeMore: {
//       position: 'absolute',
//       left: scale(315),
//       top: scale(380),
//     },
//     textSeeMore: {
//       color: CUSTOM_COLORS.Vermilion,
//       fontSize: scale(15),
//       fontFamily: FONT_FAMILY.SF_Pro_Rounded,
//       fontWeight: '400',
//     },
//     // homeContainer: {
//     //   position: 'absolute',
//     //   left: scale(50),
//     //   top: scale(750),
//     // },
//     // heartContainer: {
//     //   position: 'absolute',
//     //   left: scale(159),
//     //   top: scale(750),
//     // },
//     // userContainer: {
//     //   position: 'absolute',
//     //   left: scale(245),
//     //   top: scale(750),
//     // },
//     // clockContainer: {
//     //   position: 'absolute',
//     //   left: scale(333),
//     //   top: scale(750),
//     // },
//     footContainer: {
//       height: '10%',
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       top: scale(750),
//     },
//   });
  