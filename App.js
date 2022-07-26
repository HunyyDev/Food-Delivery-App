import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';
import CUSTOM_COLOR from './src/constants/colors';
import {IC_BackButton} from './src/assets/icons';
import {IMG_FoodImage} from './src/assets/images';
const App = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.backgroundContainer}>
      <View style={styles.headerTextContainer}>
        <Image
          source={IC_BackButton}
          style={styles.backButton}
          resizeMode={'contain'}
        />
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <Text style={styles.screenTheme}>Delivery</Text>
      <View style={styles.underThemeContainer}>
        <Text style={styles.leftUnderTheme}>Address detail</Text>
        <Text style={styles.rightUnderTheme}>change</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailNameContainer}>
          <Text style={styles.detailName}>Marvis Kparobo</Text>
        </View>
        <View style={styles.detailAddressContainer}>
          <Text style={styles.detailAddress}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </Text>
        </View>
        <View style={styles.detailNumberContainer}>
          <Text style={styles.detailNumber}>+234 9011039271</Text>
        </View>
      </View>
      <Text style={styles.option}>Delivery method.</Text>
      <View style={styles.detailContainer}>
        <View style={styles.option1Container}>
          <Text style={styles.option1}>Door delivery</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.option2Container}>
          <Text style={styles.option2}>Pick up</Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Total</Text>
        <Text style={styles.paymentNumber}>23,000</Text>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 60,
  },
  backButton: {
    marginLeft: 41,
    width: 24,
    height: 24,
  },
  headerText: {
    marginLeft: 96,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
    lineHeight: 21,
    width: 90,
    height: 25,
    color: CUSTOM_COLOR.Black,
  },
  screenTheme: {
    marginTop: 45,
    width: 150,
    height: 45,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 34,
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  underThemeContainer: {
    marginTop: 45,
    flexDirection: 'row',
  },
  leftUnderTheme: {
    marginLeft: 53,
    fontFamily: FONT_FAMILY.ProTextBold,
    width: 140,
    height: 55,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  rightUnderTheme: {
    marginLeft: 121,
    color: CUSTOM_COLOR.TahitiGold,
    width: 55,
    height: 20,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: FONT_FAMILY.ProTextRegular,
  },
  detailContainer: {
    marginTop: 22,
    backgroundColor: CUSTOM_COLOR.White,
    width: 315,
    height: 156,
    marginHorizontal: 50,
    borderRadius: 20,
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 10},
    shadowColor: CUSTOM_COLOR.Black,
    shadowOpacity: 0.03,
  },
  detailNameContainer: {
    position: 'absolute',
    top: 25,
    left: 30,
    bottom: 103,
    right: 53,
    borderBottomWidth: 0.5,
  },
  detailName: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  detailAddressContainer: {
    position: 'absolute',
    top: 61,
    left: 30,
    right: 53,
    bottom: 51,
    borderBottomWidth: 0.5,
  },
  detailAddress: {
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    lineHeight: 18,
    color: CUSTOM_COLOR.Black,
  },
  detailNumberContainer: {
    paddingLeft: 30,
    marginTop: 113,
  },
  detailNumber: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    lineHeight: 18,
  },
  option: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    marginTop: 42,
    marginLeft: 56,
  },
  option1Container: {
    width: 315,
    height: 75,
  },
  option1: {
    opacity: 1,
    paddingLeft: 52,
    paddingTop: 30,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  underline: {
    marginTop: 25,
    marginLeft: 52,
    marginRight: 32,
    height: 0,
    borderWidth: 0.5,
    opacity: 0.3,
  },
  option2Container: {
    height: 81,
    width: 315,
    borderRadius: 20,
  },
  option2: {
    paddingTop: 25,
    paddingLeft: 52,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentContainer: {
    flexDirection: 'row',
    marginTop: 67,
    marginHorizontal: 50,
    height: 30,
  },
  paymentText: {
    marginTop: 5,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentNumber: {
    marginLeft: 200,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 22,
    lineHeight: 26,
    color: CUSTOM_COLOR.Black,
  },
});
