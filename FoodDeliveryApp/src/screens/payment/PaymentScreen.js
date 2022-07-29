import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CheckBox from 'react-native-checkbox-animated';
import CustomButton from '../../components/CustomButton';
import {IC_Bank, IC_Card} from '../../assets/icons';
import CustomDeliveryMethod from '../../components/CustomDeliveryMethod';

const PaymentScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Payment</Text>
      </View>
      <View style={styles.paymentMethod}>
        <Text style={styles.textMethod}>Payment method</Text>
        <View style={styles.selectPaymentMethod}>
          <View style={styles.cardSection}>
            <View style={styles.checkBox}>
              <CheckBox
                label=""
                onValueChange={value => setChecked(value)}
                rounded={true}
                checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
              />
            </View>

            <View style={styles.iconCardSection}>
              <Image source={IC_Card} />
            </View>
            <Text>Card</Text>
          </View>

          <View style={styles.bankSection}>
            <View style={styles.checkBox}>
              <CheckBox
                label=""
                onValueChange={value => setChecked(value)}
                rounded={true}
                checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
              />
            </View>

            <View style={styles.iconBankSection}>
              <Image source={IC_Bank} />
            </View>
            <Text>Bank account</Text>
          </View>
        </View>
      </View>
      <View style={styles.deliveryMethod}>
        <Text style={styles.textMethod}>Delivery method</Text>
        <CustomDeliveryMethod />
      </View>
      <View style={styles.buttonSection}>
        <CustomButton type={'secondary'} text={'Proceed to payment'} />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },
  title: {
    flex: 1,
    marginHorizontal: scale(50),
    justifyContent: 'center',
  },

  titleText: {
    fontSize: scale(34),
    fontFamily: FONT_FAMILY.Medium,
  },
  paymentMethod: {
    marginLeft: scale(46),
    marginRight: scale(53),
    flex: 4,
    marginTop: scale(20),
    // backgroundColor: 'yellow',
  },
  selectPaymentMethod: {
    marginTop: scale(15),
  },
  textMethod: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },
  cardSection: {
    flexDirection: 'row',
    height: '40%',
    width: '100%',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },
  checkBox: {
    marginRight: scale(21),
  },
  iconCardSection: {
    height: '50%',
    width: '10%',
    backgroundColor: CUSTOM_COLOR.TahitiGold,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: scale(21),
  },
  iconBankSection: {
    height: '50%',
    width: '10%',
    backgroundColor: CUSTOM_COLOR.FrenchRose,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: scale(21),
  },
  bankSection: {
    flexDirection: 'row',
    height: '40%',
    width: '100%',
    backgroundColor: CUSTOM_COLOR.White,
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  deliveryMethod: {
    flex: 4,
    backgroundColor: 'green',
  },
  buttonSection: {
    flex: 2,
    bottom: 15,
  },
});
