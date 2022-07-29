import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}></View>
      <View style={styles.productSection}></View>
      <View style={styles.infoSection}></View>
      <View style={styles.buttonSection}></View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  headerSection: {
    flex: 1,
    backgroundColor: 'green',
  },
});
