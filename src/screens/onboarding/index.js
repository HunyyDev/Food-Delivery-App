import { 
    SafeAreaView, 
    StyleSheet,
    Image,
    View,
    Text,
    ImageBackground
} from 'react-native'
import React from 'react'
import COLOR from '../../constants/colors';
import {IMG_logo, IMG_background} from '../../assets/images/images'
import scale from '../../constants/responsive';
import font_family from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import Screens from '../../constants/screen';

const Onboarding = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={IMG_logo} style={styles.logoImage} resizeMode='center'/>
        </View>
        <Text style={styles.title}>
            {'Food for\nEveryone'}
        </Text>
        <ImageBackground
        source={IMG_background}
        style={styles.imgBgr}
        resizeMode='contain'>
            <CustomButton content='Get started' onPress={()=> navigation.navigate(Screens.LOGIN)}/>
        </ImageBackground>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.sunsetOrange,
    },
    logoContainer: {
        width: scale.scaleWidth(73),
        borderRadius: scale.scaleWidth(73/2),
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: scale.scaleHeight(56),
        marginLeft: scale.scaleWidth(49),
    },
    title: {
        fontFamily: font_family.sfProRounded.heavy,
        color: COLOR.white,
        fontSize: scale.scaleWidth(65),
        letterSpacing: -0.03,
        lineHeight: scale.scaleHeight(73),
        marginTop: scale.scaleHeight(31),
        marginLeft: scale.scaleWidth(49),
    },
    imgBgr: {
        height: scale.scaleHeight(535),
        justifyContent: 'flex-end',
    },
})

export default Onboarding;