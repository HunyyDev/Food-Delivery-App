import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import {IC_Bank, IC_Card} from '../../assets/icons';
import CustomDeliveryMethod from '../../components/CustomDeliveryMethod';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import CheckBox from 'react-native-checkbox-animated';

const PaymentScreen = props => {
  const [checked, setChecked] = useState(false);
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
      <View style={styles.title}>
        <Text style={styles.titleText}>Payment</Text>
      </View>
      <View style={styles.paymentMethod}>
        <Text style={styles.textMethod}>Payment method</Text>
        <View style={styles.selectPaymentMethod}>
          <View style={styles.cardSection}>
            <View style={styles.checkBox}>
              {/* <CheckBox
                size={20}
                checked={checked}
                onValueChange={value => setChecked(value)}
                rounded={true}
                checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
                boxStyle={styles.boxStyle}
                checkMarkSize={10}
              /> */}
              <TouchableOpacity
                style={{
                  height: scale(20),
                  width: scale(20),
                  // backgroundColor: 'blue',
                  borderRadius: scale(20) / 2,
                  borderColor: CUSTOM_COLOR.Vermilion,
                  borderWidth: 1,
                }}></TouchableOpacity>
            </View>

            <View style={styles.iconAndTextCard}>
              <View style={styles.iconCardSection}>
                <Image source={IC_Card} />
              </View>
              <Text>Card</Text>
            </View>
          </View>

          <View style={styles.bankSection}>
            <View style={styles.checkBox}>
              {/* <CheckBox
                label=""
                onValueChange={value => setChecked(value)}
                rounded={true}
                checkedBackgroundColor={CUSTOM_COLOR.Vermilion}
              /> */}
            </View>
            <View style={styles.iconAndTextBank}>
              <View style={styles.iconBankSection}>
                <Image source={IC_Bank} />
              </View>
              <Text>Bank account</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.deliveryMethod}>
        <Text style={styles.textMethod}>Delivery method</Text>
        <CustomDeliveryMethod />
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
  },
  textMethod: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },
  cardSection: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },
  iconAndTextCard: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Silver,
  },

  iconAndTextBank: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  checkBox: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    zIndex: 1,
  },
  boxStyle: {
    // backgroundColor: CUSTOM_COLOR.Vermilion,
    borderColor: CUSTOM_COLOR.Vermilion,
  },
  iconCardSection: {
    height: '50%',
    width: '20%',
    backgroundColor: CUSTOM_COLOR.TahitiGold,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: scale(21),
  },
  iconBankSection: {
    height: '50%',
    width: '20%',
    backgroundColor: CUSTOM_COLOR.FrenchRose,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: scale(21),
  },
  bankSection: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  deliveryMethod: {
    flex: 3,
  },
  total: {
    flex: 1,
    flexDirection: 'row',
  },

  buttonSection: {
    flex: 2,
    bottom: 20,
  },
});
