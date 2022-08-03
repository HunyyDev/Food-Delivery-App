import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import {IC_Bank, IC_Card} from '../../assets/icons';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import CustomSelection from '../../components/CustomSelection';

const PaymentScreen = props => {
  const [payment, setPayment] = useState('Card');
  const [delivery, setDelivery] = useState('Door delivery');

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <CustomHeaderGoBack
          title="Checkout"
          leftOnPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Payment</Text>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.textMethod}>Payment method</Text>
          <View style={styles.selectPaymentMethod}>
            <View style={{flex: 1}}>
              <CustomSelection
                icon={IC_Card}
                label={'Card'}
                selectedPage={payment}
                onPress={() => setPayment('Card')}
                color={CUSTOM_COLOR.TahitiGold}
              />
            </View>
            <View style={styles.line} />
            <View style={{flex: 1}}>
              <CustomSelection
                icon={IC_Bank}
                label={'Bank account'}
                selectedPage={payment}
                onPress={() => setPayment('Bank account')}
                color={CUSTOM_COLOR.FrenchRose}
              />
            </View>
          </View>
        </View>

        <View style={styles.deliveryMethod}>
          <Text style={styles.textMethod}>Delivery method</Text>
          <View style={styles.selectDeliveryMethod}>
            <View style={{flex: 1}}>
              <CustomSelection
                label={'Door delivery'}
                selectedPage={delivery}
                onPress={() => setDelivery('Door delivery')}
              />
            </View>
            <View style={styles.line} />
            <View style={{flex: 1}}>
              <CustomSelection
                label={'Pick Up'}
                selectedPage={delivery}
                onPress={() => setDelivery('Pick Up')}
              />
            </View>
          </View>
        </View>

        <View style={styles.total}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
              Total
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',

              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
              23,000
            </Text>
          </View>
        </View>
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
    marginHorizontal: scale(53),
  },
  headerSection: {
    flex: 1,
  },
  main: {
    flex: 8,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },

  titleText: {
    fontSize: scale(34),
    fontFamily: FONT_FAMILY.Medium,
  },
  paymentMethod: {
    flex: 4,
    marginTop: scale(20),
  },
  selectPaymentMethod: {
    flex: 1,
    marginTop: scale(15),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },

  textMethod: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },
  deliveryMethod: {
    flex: 3,
    marginTop: scale(20),
  },
  selectDeliveryMethod: {
    flex: 1,
    marginTop: scale(15),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },
  total: {
    flex: 1,
    flexDirection: 'row',
  },

  buttonSection: {
    flex: 1,
    bottom: 15,
  },

  line: {
    height: 1,
    width: '65%',
    backgroundColor: CUSTOM_COLOR.Black,
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
  },
});
