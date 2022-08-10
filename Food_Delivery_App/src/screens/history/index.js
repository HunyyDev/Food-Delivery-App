import React from "react";
import { Text } from "react-native";
import { StyleSheet,SafeAreaView,TouchableOpacity,Image, Button } from "react-native";
import { View } from "react-native";
import scale from "../../constants/responsive";
import FONT_FAMILY from "../../constants/font";
import CUSTOM_COLORS from "../../constants/colors";
import { ICON_CLOCK, ICON_HEART } from "../../assets/icons";
import { IMG_VEGETABLE } from "../../assets/images";
import { IC_History } from "../../assets/icons";
import HomeScreen from "../HomeScreen";
import CustomButton from "../../components/CustomButton";
import { IC_GoBack } from "../../assets/icons";

const HistoryComponent=(props)=>
{
    return(
        <View style=
        {
          {
              backgroundColor:CUSTOM_COLORS.White,
              borderRadius:scale(20),
              width:scale(350),
              height:scale(102),
          }
        }>
        <Text>hello {props.price}</Text>
        </View>
    )

}

const HistoryScreen = ({navigation})=>
{
    Array:[
        {
            price:25,
        },
        {
            price:50,
        }
    ]
    return(
    // <View style={styles.viewStyle}>
    //     <Text style={styles.textStyle}>Food Info Screen</Text>
    // </View>

    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

        {/* Go back button */}
      
        <View style={styles.goBackContainer}>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={() => {navigation.goBack()}}>
            <IC_GoBack />
          </TouchableOpacity>
        </View>

        {/* screen name */}
      <>
        <Text style={styles.screenName}>History</Text>
      </>

           {/* {Array.map(each=><HistoryComponent price={each.price} />)} */}
     {/* <HistoryComponent price={50}/> */}

         {/* Logo */}
         <View style={styles.viewIcon}>
          <IC_History />
          
        </View>

        {/* title */}
      <>
        <Text style={styles.textContainer}>No history yet</Text>
      </>

      {/* descriptions */}
      <>
        <Text style={styles.descriptionsContainer}>
          {'Hit the orange button down \nbelow to Create an order'}{' '}
        </Text>
      </>

    
    <CustomButton
        title='start odering'
        type="secondary"
        name='HS'
        navigation={navigation}
      />

    </SafeAreaView>

    
    );

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CUSTOM_COLORS.Athens_Gray,
    },
    goBackContainer: {
      position: 'absolute',
      top: scale(61),
      left: scale(50),
    },
    hitSlop: {
      top: scale(10),
      left: scale(10),
      right: scale(10),
      bottom: scale(10),
    },
    screenName: {
      textAlign: 'center',
      fontSize: scale(18),
      left: scale(175),
      top: scale(61),
      fontWeight: '600',
      color: CUSTOM_COLORS.Black,
      position: 'absolute',
      lineHeight: scale(21),
    },
    viewIcon: {
      position: 'absolute',
      width: scale(106.5),
      height: scale(118.33),
      left: scale(148),
      top: scale(272.92),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLORS.Athens_Gray,
    },
    textContainer: {
      textAlign: 'center',
      fontSize: scale(28),
      left: scale(111),
      top: scale(418),
      fontWeight: '600',
      color: CUSTOM_COLORS.Black,
      position: 'absolute',
      lineHeight: scale(33),
    },
    descriptionsContainer: {
      textAlign: 'center',
      fontSize: scale(17),
      left: scale(97),
      top: scale(468),
      fontWeight: '400',
      color: CUSTOM_COLORS.Black,
      position: 'absolute',
      lineHeight: scale(20),
      opacity: 0.57,
    },
  });
  
export default HistoryScreen;