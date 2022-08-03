import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native'
import React from 'react'
import {
    IMG_offline
} from '../assets/images/images'
import CustomButton from '../components/CustomButton'
import scale from '../constants/responsive'
import font_family from '../constants/fonts'
import COLOR from '../constants/colors'

const NoInternetScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={IMG_offline} style={styles.image} resizeMode='contain'/>
            <Text style={styles.h1}>No internet Connection</Text>
            <Text style={styles.h2}>{'Your internet connection is currently\nnot available please check or try again.'}</Text>
            <CustomButton content='Try again' type='secondary' style={styles.button} 
            onPress={props.setter}/>
        </SafeAreaView>
    )
}

export default NoInternetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.white
    },
    image: {
        width: scale.scaleWidth(200),
        height: scale.scaleWidth(200),
        marginTop: scale.scaleHeight(222),
    },
    h1: {
        fontFamily: font_family.SFProText.regular,
        fontSize: scale.scaleWidth(23),
        color: COLOR.black,
        flex: 0.3,
    },
    h2: {
        textAlign: 'center',
        fontFamily: font_family.SFProText.regular,
        fontSize: scale.scaleWidth(15),
        flex: 0.6,
    },
    button: {
        marginBottom: scale.scaleHeight(250)
    }
})