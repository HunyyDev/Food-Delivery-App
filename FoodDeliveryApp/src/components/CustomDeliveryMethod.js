import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-checkbox-animated';
import scale from '../constants/responsive';
import CUSTOM_COLOR from '../constants/colors';

const CustomDeliveryMethod = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.doorDelivery}>
        <View style={styles.checkBox}>
          <CheckBox
            label=""
            rounded="true"
            onValueChange={value => setChecked(value)}
            checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
          />
        </View>
        <View style={styles.textDoorDelivery}>
          <Text>Door delivery</Text>
        </View>
      </View>
      <View style={styles.pickUp}>
        <View style={styles.checkBox}>
          <CheckBox
            label=""
            rounded="true"
            onValueChange={value => setChecked(value)}
            checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
          />
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
    marginTop: scale(20),
    borderRadius: 20,
  },
  doorDelivery: {
    flex: 1,
    flexDirection: 'row',
  },
  pickUp: {
    flex: 1,
    flexDirection: 'row',
  },
  checkBox: {
    justifyContent: 'center',
  },
  textDoorDelivery: {
    flex: 1,
    justifyContent: 'center',
    marginRight: scale(50),
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Silver,
  },
  textPickUp: {
    flex: 1,
    justifyContent: 'center',
    marginRight: scale(50),
  },
});
