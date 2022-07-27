import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {ICON_CHEVRON} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import RadioButton from '../../components/RadioButton';

const DeliveryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={ICON_CHEVRON} style={styles.Chevron} />
        <Text style={styles.Checkout}>Checkout</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.DeliveryText}>Delivery</Text>
      </View>
      <View style={styles.AddressDetails}>
        <Text style={styles.AddressText}>Address details</Text>
        <Text style={styles.changeText}>change</Text>
      </View>
      <View style={styles.BoxContainer}>
        <View style={styles.whiteBox} />
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

export default DeliveryScreen;
