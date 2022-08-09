import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { IMG_NOINTERNET } from "../../assets/images";
import FONT_FAMILY from "../../constants/font";
import CUSTOM_COLORS from "../../constants/colors";
import { Image } from "react-native";
import scale from "../../constants/responsive";
import CustomButton from "../../components/CustomButton";
const NoInternetScreen = ({navigation})=>
{
    return(
        <View>
            {/*Image: no internet */}
            <Image source = {IMG_NOINTERNET} style={styles.image}>
            </Image>
            {/* text: No internet connection*/}
            <Text style={styles.text1}>
            No internet connection
            </Text>

            {/* text: Your internet connection...try again*/}
            <Text style={styles.text2}>
            Your internet connection is currently not available please check or try again
            </Text>
            <CustomButton  title='Update'  type="secondary"  name='HS' navigation={navigation}/>


        </View>
    );

};
const styles=StyleSheet.create({
    image:{
        position:"absolute",
        width:scale(133.29),
        height:scale(120.07),
        left:scale(131.49),
        //bottom:scale(504.96),
        top:scale(270.97)
    },

    text1:{
        // fontFamily:FONT_FAMILY.Abel,
        // fontSize:scale(28),
        // left:scale(84),
        // top:scale(418),
        // color:CUSTOM_COLORS.Black,
        // width:scale(356),
        // position:"absolute",
        // textAlign:"center",
        // height:scale(36),

        textAlign: 'center',
        fontSize: scale(28),
        left: scale(84),
        top: scale(418),
        fontWeight: '600',
        color: CUSTOM_COLORS.Black,
        position: 'absolute',
        lineHeight: scale(33),
        fontFamily:FONT_FAMILY.Abel,
    
    },
    text2:{
        textAlign: 'center',
    fontSize: scale(17),
    left: scale(82),
    top: scale(468),
    fontWeight: '400',
    color: CUSTOM_COLORS.Black,
    position: 'absolute',
    lineHeight: scale(20),
    opacity: 0.57,

    },
});
export default NoInternetScreen;