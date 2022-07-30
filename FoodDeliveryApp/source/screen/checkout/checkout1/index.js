import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../../../constants/color';
import React from 'react';
import scale from '../../../../responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import Custom_Border from './components/Custom_Border';
import Custom_TextHead from './components/Custom_Text';
import Custom_ButtonOne from '../../../components/Custom_ButtonOne';
import Custom_Text2 from './components/Custom_Text2';
import {IC_GoBack} from '../../../assets/icons';
import Custom_ViewButton from './components/Custom_ViewButton';

const CheckOut1Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View>
          <TouchableOpacity style={styles.IC}>
            <IC_GoBack />
          </TouchableOpacity>
          <Text style={styles.text1}>CheckOut</Text>
          <Text style={styles.text2}>Delivery</Text>
        </View>
      </>

      <>
        <View style={styles.view1}>
          <Custom_TextHead text="Address details" />
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textbutton}>change</Text>
          </TouchableOpacity>
          <View style={styles.view1a}>
            <View style={styles.view1b}>
              <Custom_Text2 text="Marvis Kparobo" fontWeight="500" />
              <Custom_Border top={scale(10)} />
              <View style={styles.view1c}>
                <Text style={styles.textview1c}>
                  Km 5 refinery road oppsite re public road, effurun, delta
                  state
                </Text>
                <Custom_Border top={scale(10)} />
              </View>
              <View style={styles.view1c}>
                <Text style={styles.textview1c}>+234 9011039271</Text>
              </View>
            </View>
          </View>
        </View>
      </>

      <>
        <View style={styles.view2}>
          <Custom_TextHead text="Delivery method." />
          <View style={styles.view2a}>
            {/* <Text2 text="Door delivery" fontWeight="400"></Text2> */}
            <View style={styles.view1b}>
              <Custom_ViewButton
                text1="Door delivery"
                top1={scale(0)}
                text2="Pick up"
                top2={scale(20)}
              />
            </View>
          </View>
          <Custom_Text2 text="Total" fontWeight="400" top={scale(185)} />
          <Text style={styles.money}>23,000</Text>
        </View>
      </>

      <>
        <Custom_ButtonOne
          text={'Proceed to payment'}
          color={CUSTOM_COLOR.Vermilion}
          textColor={CUSTOM_COLOR.White}
        />
      </>
    </SafeAreaView>
  );
};

export default CheckOut1Screen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.AthensGray,
    flex: 1,
  },
  text1: {
    fontSize: scale(18),
    top: scale(61),
    left: scale(161),
    height: scale(21),
    width: scale(85),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
  },
  text2: {fontSize: scale(34),
    top: scale(90),
    left: scale(50),
    height: scale(45),
    width: scale(137),
    color: CUSTOM_COLOR.Black,
  },
  IC: {
    top: scale(85),
    left: scale(41),
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    top: scale(210),
    left: scale(50),
    height: scale(196),
    width: scale(315),
    position: 'absolute',
    // backgroundColor: CUSTOM_COLOR.Vermilion,
  },
  button1: {
    top: scale(-20),
    width: scale(59),
    height: scale(23),
  },
  textbutton: {
    left: scale(250),
    color: CUSTOM_COLOR.TahitiGold,
    width: '100%',
    height: '100%',
  },
  view1a: {
    top: scale(196 - 156),
    position: 'absolute',
    width: scale(315),
    height: scale(156),
    borderRadius: scale(20),
    backgroundColor: CUSTOM_COLOR.White,
  },
  view1b: {
    top: scale(25),
    left: scale(30),
    width: scale(232),
    height: scale(106),
    position: 'absolute',
  },
  textview1a: {
    fontSize: scale(17),
    fontWeight: '500',
    color: CUSTOM_COLOR.Black,
  },
  view1c: {
    top: scale(20),
    height: scale(56),
    borderColor: CUSTOM_COLOR.Black,
  },
  textview1c: {
    fontSize: scale(15),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
  },
  view2: {
    top: scale(448),
    left: scale(50),
    height: scale(235),
    width: scale(318),
    position: 'absolute',
    // backgroundColor: CUSTOM_COLOR.Vermilion,
  },
  view2a: {
    top: scale(40),
    position: 'absolute',
    width: scale(315),
    height: scale(156),
    borderRadius: scale(20),
    backgroundColor: CUSTOM_COLOR.White,
  },
  money: {
    fontSize: scale(22),
    fontWeight: '600',
    left: scale(240),
    color: CUSTOM_COLOR.Black,
    top: scale(157),
  },
});