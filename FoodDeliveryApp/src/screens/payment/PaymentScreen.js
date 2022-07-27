import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}></View>
      <View style={styles.paymentMethod}></View>
      <View style={styles.deliveryMethod}></View>
      <View style={styles.buttonSection}></View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  paymentMethod: {
    flex: 4,
    backgroundColor: 'pink',
  },
  deliveryMethod: {
    flex: 3,
    backgroundColor: 'green',
  },
  buttonSection: {
    flex: 2,
    backgroundColor: 'blue',
  },
});
