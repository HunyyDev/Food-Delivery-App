import { StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import scale from '../../../responsive'
import CUSTOM_COLOR from '../../constants/color'
import { IC_NoWifi } from '../../assets/icons'
import Custom_ButtonOne from '../../components/Custom_ButtonOne'

const NoWifiScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* icon NoWifi */}
      <>
        <View style={styles.viewIcon}>
          <IC_NoWifi />
        </View>
      </>
      {/* title */}
      <>
        <Text style={styles.textContainer}>No internet Connection</Text>
      </>
      {/* descriptions */}
      <>
        <Text style={styles.descriptionsContainer}>{'Your internet connection is currently \nnot available please check or try again.'} </Text>
      </>
      {/* button */}
      <>
      <Custom_ButtonOne
            text="Try again"
            style={{top:0.67 * Dimensions.get('window').height}}
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
          />
      </>
    </SafeAreaView>
  )
}

export default NoWifiScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.AthensGray,
    },
    viewIcon: {
        position: 'absolute',
        width: scale(113.13),
        height: scale(107.99),
        left: scale(132),
        top: scale(272.01),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CUSTOM_COLOR.AthensGray,
    },
    textContainer: {
        textAlign: 'center',
        fontSize: scale(28),
        left: scale(47),
        top: scale(418),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(33),
    },
    descriptionsContainer: { 
        textAlign: 'center',
        fontSize: scale(17),
        left: scale(51),
        top: scale(468),
        fontWeight: '400',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(20),
        opacity: 0.57,
    },

});