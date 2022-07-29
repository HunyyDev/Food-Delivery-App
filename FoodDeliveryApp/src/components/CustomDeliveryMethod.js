import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from 'react-native-checkbox-animated';

const CustomDeliveryMethod = () => {
  return (
    <View style={styles.container}>
      <View style={styles.doorDelivery}>
        <View style={styles.checkBox}>
          <CheckBox label="" rounded="true" />
        </View>
        <View style={styles.textDoorDelivery}>
          <Text>Door delivery</Text>
        </View>
      </View>
      <View style={styles.pickUp}>
        <View style={styles.checkBox}>
          <CheckBox label="" rounded="true" />
        </View>
        <View style={styles.textPickUp}>
          <Text>Pick Up</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDeliveryMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  doorDelivery: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  pickUp: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  checkBox: {
    backgroundColor: 'red',
  },
  textDoorDelivery: {
    backgroundColor: 'pink',
  },
});
