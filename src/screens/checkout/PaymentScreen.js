import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {
  ICON_CHEVRON,
  ICON_CREDIT_CARD,
  ICON_DASHICONS_BANK,
} from '../../assets/icons';
import RadioButton from '../../components/RadioButton';
import styles from './styles';

const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={ICON_CHEVRON} style={styles.Chevron} />
        <Text style={styles.Checkout}>Checkout</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.DeliveryText}>Payment</Text>
      </View>
      <View style={styles.AddressDetails}>
        <Text style={styles.AddressText}>Payment method</Text>
      </View>
      <View style={styles.BoxContainer}>
        <View style={styles.whiteBox}>
          <View style={styles.Box}>
            <RadioButton />
            <View style={styles.rectangle}>
              <Image source={ICON_CREDIT_CARD} />
            </View>
            <Text style={styles.doorDelivery}>Card</Text>
          </View>
          <View style={[styles.Box, styles.Underline]}>
            <RadioButton />
            <View style={[styles.rectangle, styles.rectangleColor]}>
              <Image source={ICON_DASHICONS_BANK} />
            </View>
            <Text style={styles.doorDelivery}>Bank account</Text>
          </View>
        </View>
      </View>
      <View style={styles.DeliveryMethod}>
        <Text style={styles.AddressText}>Delivery method.</Text>
      </View>
      <View style={styles.BoxContainer}>
        <View style={styles.whiteBox}>
          <View style={styles.Box}>
            <RadioButton />
            <Text style={styles.doorDelivery}>Door delivery</Text>
          </View>
          <View style={[styles.Box, styles.Underline]}>
            <RadioButton />
            <Text style={styles.doorDelivery}>Pick up</Text>
          </View>
        </View>
      </View>
      <View style={styles.TotalContainer}>
        <Text style={styles.TotalText}>Total</Text>
        <Text style={styles.priceText}>23,000</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <CustomButton text={'Proceed to payment'} label={'secondary'} />
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
