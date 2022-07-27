import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../../constants/color';
import scale from '../../../../responsive';
import Custom_DeliveryMethod from '../components/Custom_DeliveryMethod';
import Custom_PaymentMethod from '../components/Custom_PaymentMethod';
import Custom_ButtonOne from '../../../components/Custom_ButtonOne';
import { IMG_CARD, IMG_BANK } from '../../../assets/images';

const CheckOut2Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Screen name */}
      <>
      <Text style={styles.screenName}>Check out</Text>
      </>
      {/* title */}
      <>
      <Text style={styles.title}>Payment</Text>
      </>
      {/* Payment method */}
      <>
      <View style={styles.paymentMethod}>
        <Text style={styles.methodTitle}>Payment method</Text>
        <Custom_PaymentMethod selectText1="Card"   selectText2="Bank account" img1={IMG_CARD} img2={IMG_BANK} style={styles.customSelect1} />
      </View>
      </>
      {/* Delivery method */}
      <>
      <View style={styles.deliveryMethod}>
        <Text style={styles.deliveryTitle}>Delivery method</Text>
        <Custom_DeliveryMethod selectText1="Door delivery"   selectText2="Pick up" style={styles.customSelect2} />
      </View>
      </>
      {/* total price text */}
      <>
      <View style={styles.totalPriceView}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>23,000</Text>
      </View>
      </>
       {/* Button */}
       <>
       <Custom_ButtonOne
            text="Proceed to payment"
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
        />
      </>
    </SafeAreaView>
  )
}

export default CheckOut2Screen

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    screenName: {
      top: scale(50),
      fontSize: scale(18),
      fontWeight: '600',
      color: CUSTOM_COLOR.Black,
      left: scale(161),
      position: 'absolute',
    },
    title: {
    top: scale(90),
    fontSize: scale(34),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
    left: scale(50),
    position: 'absolute',
    },
    paymentMethod: {
      position: 'absolute',
      left: scale(46),
      top: scale(170),
    },
    methodTitle: {
      fontSize: scale(17),
      fontWeight: '600',
      color: CUSTOM_COLOR.Black,
      left: scale(3),
      position: 'absolute',
    },
    deliveryMethod: {
      position: 'absolute',
      left: scale(51),
      top: scale(430),
    },
    deliveryTitle: {
      fontSize: scale(17),
      fontWeight: '600',
      color: CUSTOM_COLOR.Black,
      left: scale(3),
      position: 'absolute',
    },
    customSelect1: {
      top: scale(40),
      height: scale(205),
    },
    customSelect2: {
      top: scale(40),
      height: scale(150),
    },
    totalPriceView: {
      position: 'absolute',
      width: scale(315),
      height: scale(26),
      left: scale(50),
      top: scale(650),
      flexDirection: 'row',
    },
    totalText: {
      marginTop: scale(-3),
      fontSize: scale(17),
      fontWeight: '400',
      color: CUSTOM_COLOR.Black,
      position: 'absolute',
    },
    priceText: {
      marginLeft: scale(237),
      fontSize: scale(22),
      fontWeight: '600',
      color: CUSTOM_COLOR.Black,
      position: 'absolute',
    },







    
});