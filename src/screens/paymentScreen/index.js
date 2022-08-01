import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {IC_BackButton, IC_BiCreditCard, IC_Bank} from './src/assets/icons';
import CustomButton from './src/assets/components/CustomButton';
import styles from './styles';
const PaymentScreen = () => {
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
      <Text style={styles.screenTheme}>Payment</Text>
      <Text style={styles.leftUnderTheme}>Payment method</Text>
      <View style={[styles.detailContainer, styles.box1Height]}>
        <View
          style={[styles.option1Container, styles.cardOptionContainerPosition]}>
          <View
            style={[styles.creditCardContainer, styles.creditCardBackground]}>
            <Image source={IC_BiCreditCard} resizeMode={'contain'} />
          </View>
          <Text style={[styles.detailName, styles.cardOptionPosition]}>
            Card
          </Text>
        </View>
        <View style={[styles.underline, styles.underline1]} />
        <View style={[styles.option2Container, styles.option2Position]}>
          <View style={[styles.creditCardContainer, styles.bankBackground]}>
            <Image source={IC_Bank} resizeMode={'contain'} />
          </View>
          <Text style={[styles.detailName, styles.cardOptionPosition]}>
            Bank account
          </Text>
        </View>
      </View>
      <Text style={styles.option}>Delivery method.</Text>
      <View style={[styles.detailContainer, styles.box2Height]}>
        <View
          style={[styles.option1Container, styles.doorDeliveryOptionPosition]}>
          <Text style={[styles.option1, styles.doorDeliveryTextPosition]}>
            Door delivery
          </Text>
        </View>
        <View style={[styles.underline, styles.underline1]} />
        <View style={styles.option2Container}>
          <Text style={styles.option2}>Pick up</Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Total</Text>
        <Text style={styles.paymentNumber}>23,000</Text>
      </View>
      <CustomButton style={styles.buttonContainer} type="secondary">
        Proceed to payment
      </CustomButton>
    </ScrollView>
  );
};

export default PaymentScreen;
