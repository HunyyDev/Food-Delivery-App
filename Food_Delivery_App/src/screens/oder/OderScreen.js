import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ButtonGoBack from '../../Components/ButtonGoBack';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../Components/CustomButton';
import {ICO_Group} from '../../assets/icons';
import CUSTOM_COLOR from '../../constant/color';
import FONT_FAMILY from '../../constant/font';

const OderScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <ButtonGoBack navigation={navigation} />
      <Text style={styles.name}>Orders</Text>
      <Image source={ICO_Group} style={styles.image} />
      <Text style={styles.title}>No orders yet</Text>
      <Text style={styles.discription}>
        {`Hit the orange button down\n  below to Create an order`}
      </Text>
      <View style={styles.button}>
        <CustomButton label={'Start odering'} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default OderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  name: {
    fontFamily: FONT_FAMILY.Regular_Sf,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 20,
    color: CUSTOM_COLOR.Black,
  },
  image: {
    width: 113.13,
    height: 107.99,
    marginTop: 120,
    alignSelf: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.Regular_Sf,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    fontSize: 30,
    marginTop: 20,
  },
  discription: {
    fontFamily: FONT_FAMILY.Regular_Sf,
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 15,
  },
  button: {
    alignSelf: 'center',
    marginTop: 180,
  },
});
