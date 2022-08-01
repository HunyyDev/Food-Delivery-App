import React from "react";
import { Text  } from "react-native-svg";
import { StyleSheet,SafeAreaView,TouchableOpacity,Image } from "react-native";
import { View } from "react-native";
import scale from "../../constants/responsive";
import FONT_FAMILY from "../../constants/font";
import CUSTOM_COLORS from "../../constants/colors";
import { ICON_CLOCK } from "../../assets/icons";
import { IMG_VEGETABLE } from "../../assets/images";
import HomeScreen from "../HomeScreen";

const HistoryScreen = ({navigation})=>
{
    return(
    // <View style={styles.viewStyle}>
    //     <Text style={styles.textStyle}>Food Info Screen</Text>
    // </View>

    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* back button */}
        <TouchableOpacity 
        style={styles.backContainer}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={()=>{navigation.goBack()}}>
            <Image source={ICON_CLOCK}/>
        </TouchableOpacity>
         {/* title */}
         <Text style={styles.title}>
            abcxyshuheiehied
         </Text>
         
         {/* Logo */}
         <Image 
         source={ICON_CLOCK}
         style={{alignSelf: 'center', marginTop: scale(200)}}
         />
         <Text style={styles.title}>
            abcskcscscjhsjdhskdksdnk
         </Text>

         {/* Button */}
         <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HS')}} >
            <Text style={styles.buttonText}>
                click
            </Text>

         </TouchableOpacity>

    </SafeAreaView>

    
    );

};
const styles=StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: 'red',
    },
    textStyle:{
        flex: 1,
        fontSize:50,
        color: 'white'

    },

    container:{
        flex:1,
        backgroundColor:CUSTOM_COLORS.White,
    },

    backContainer:{
        width: scale(6),
        height: scale(12),
        top: scale(66),
        left: scale(50),
    },

    title: {
        fontFamily: FONT_FAMILY.SFBold,
        fontSize: scale(25),
        alignSelf: 'center',
        top: scale(40),
        color: CUSTOM_COLORS.Black,
      },
      button: {
        backgroundColor: CUSTOM_COLORS.Vermilion,
        width: scale(314),
        height: scale(70),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(30),
        bottom: scale(41),
        position: 'absolute',
      },
      buttonText:{
        fontFamily: FONT_FAMILY.SFProTextRegular,
        fontSize: scale(20),
        alignSelf: 'center',
        color: CUSTOM_COLORS.White,
      },
});
export default HistoryScreen;