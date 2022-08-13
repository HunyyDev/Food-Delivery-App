import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import LargeButton from '../../components/LargeButton';
import {
  ICON_CHEVRON,
  ICON_CREDIT_CARD,
  ICON_DASHICONS_BANK,
} from '../../assets/icons';
import RadioButton from '../../components/RadioButton';
import styles from './styles';
import COLORS from '../../constants/colors';
import SCREEN_NAME from '../../constants/screens';

const PaymentScreen = ({navigation}) => {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={ICON_CHEVRON} style={styles.Chevron} />
          <Text style={styles.Checkout}>Checkout</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.DeliveryText}>Payment</Text>
        </View>
        <View style={styles.AddressDetails}>
          <Text style={styles.AddressText}>Payment method</Text>
        </View>
        <View style={styles.BoxContainer}>
          <View style={styles.whiteBox}>
            <View style={styles.Box}>
              <RadioButton />
              <View style={styles.rectangle}>
                <Image source={ICON_CREDIT_CARD} />
              </View>
              <Text style={styles.doorDelivery}>Card</Text>
            </View>
            <View style={[styles.Box, styles.Underline]}>
              <RadioButton />
              <View style={[styles.rectangle, styles.rectangleColor]}>
                <Image source={ICON_DASHICONS_BANK} />
              </View>
              <Text style={styles.doorDelivery}>Bank account</Text>
            </View>
          </View>
        </View>
        <View style={styles.DeliveryMethod}>
          <Text style={styles.AddressText}>Delivery method.</Text>
        </View>
        <View style={styles.BoxContainer}>
          <View style={styles.whiteBox}>
            <View style={styles.Box}>
              <RadioButton />
              <Text style={styles.doorDelivery}>Door delivery</Text>
            </View>
            <View style={[styles.Box, styles.Underline]}>
              <RadioButton />
              <Text style={styles.doorDelivery}>Pick up</Text>
            </View>
          </View>
        </View>
        <View style={styles.TotalContainer}>
          <Text style={styles.TotalText}>Total</Text>
          <Text style={styles.priceText}>23,000</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <LargeButton
            onPress={() => setIsDisplay(true)}
            text={'Proceed to payment'}
            label={'secondary'}
          />
        </View>
      </ScrollView>
      {isDisplay && (
        <TouchableWithoutFeedback onPress={() => setIsDisplay(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeader}>Please note</Text>
              <View style={styles.noteContainer}>
                <View style={styles.noteItem}>
                  <Text style={styles.noteTitle}>Delivery to Mainland</Text>
                  <Text style={styles.noteNumber}>N1000 - N2000</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: COLORS.Black,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}></View>
                <View style={styles.noteItem}>
                  <Text style={styles.noteTitle}>Delivery to island</Text>
                  <Text style={styles.noteNumber}>N2000 - N3000</Text>
                </View>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerCancel}>Cancel</Text>
                <LargeButton
                  style={styles.footerProceed}
                  onPress={() => navigation.navigate(SCREEN_NAME.HOME)}
                  text="Proceed"
                  type="secondary"></LargeButton>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default PaymentScreen;
