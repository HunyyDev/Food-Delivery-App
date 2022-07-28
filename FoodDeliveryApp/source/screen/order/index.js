import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import scale from '../../../responsive'
import CUSTOM_COLOR from '../../constants/color'
import { IC_BigCart } from '../../assets/icons'
import Custom_ButtonOne from '../../components/Custom_ButtonOne'

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* screen name */}
      <>
        <Text style={styles.screenName}>Orders</Text>
      </>
      {/* icon Cart */}
      <>
        <View style={styles.viewIcon}>
          <IC_BigCart />
        </View>
      </>
      {/* title */}
      <>
        <Text style={styles.textContainer}>No orders yet</Text>
      </>
      {/* descriptions */}
      <>
        <Text style={styles.descriptionsContainer}>{'Hit the orange button down \nbelow to Create an order'} </Text>
      </>
      {/* button */}
      <>
      <Custom_ButtonOne
            text="Start ordering"
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
          />
      </>
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    screenName: {
        textAlign: 'center',
        fontSize: scale(18),
        left: scale(175),
        top: scale(61),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(21),
    },
    viewIcon: {
        position: 'absolute',
        width: scale(113.13),
        height: scale(107.99),
        left: scale(132),
        top: scale(272.01),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    textContainer: {
        textAlign: 'center',
        fontSize: scale(28),
        left: scale(114),
        top: scale(418),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(33),
    },
    descriptionsContainer: { 
        textAlign: 'center',
        fontSize: scale(17),
        left: scale(97),
        top: scale(468),
        fontWeight: '400',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(20),
        opacity: 0.57,
    },

});