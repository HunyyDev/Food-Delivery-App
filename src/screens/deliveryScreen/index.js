import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {IC_BackButton} from './src/assets/icons';
import CustomButton from './src/assets/components/CustomButton';
import styles from './styles';

const DeliveryScreen = () => {
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
      <CustomButton style={styles.buttonContainer} type="secondary">
        Proceed to payment
      </CustomButton>
    </ScrollView>
  );
};

export default DeliveryScreen;
