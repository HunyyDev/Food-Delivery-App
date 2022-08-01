import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import CustomButton from '../../components/CustomButton';
import Option from '../../components/OptionList';
import styles from './styles';
import OPTION_NAME from '../../constants/optionName';
import {useState} from 'react';
import SCREEN_NAME from '../../constants/screens';
const DeliveryScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const onTransitToPayment = () => {
    navigation.navigate(SCREEN_NAME.PAYMENT);
  };
  const [option, setOption] = useState();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.backgroundContainer}>
      <View style={styles.headerTextContainer}>
        <BackButton style={styles.backButton} onPress={onBack} />
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <Text style={styles.screenTheme}>Delivery</Text>
      <View style={styles.underThemeContainer}>
        <Text style={styles.leftUnderTheme}>Address details</Text>
        <Text style={styles.rightUnderTheme}>Change</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailNameContainer}>
          <Text style={styles.detailName}>Marvis Kparobo</Text>
        </View>
        <View style={styles.detailAddressContainer}>
          <Text style={styles.detailAddress}>
            Km 5 refinery road oppsite republic road, effurun, delta state
          </Text>
        </View>
        <View style={styles.detailNumberContainer}>
          <Text style={styles.detailNumber}>+234 9011039271</Text>
        </View>
      </View>
      <Text style={styles.option}>Delivery method.</Text>
      <View style={styles.detailContainer}>
        {/* <View style={styles.option1Container}>
          <Text style={styles.option1}>Door delivery</Text>
          <View style={styles.underline} />
        </View> */}
        <Option
          onPress={() => setOption(OPTION_NAME.DoorDelivery)}
          isChoosing={option === OPTION_NAME.DoorDelivery}>
          Door Delivery
        </Option>
        {/* <View style={styles.option2Container}>
          <Text style={styles.option2}>Pick up</Text>
        </View> */}
        <Option
          onPress={() => setOption(OPTION_NAME.PickUp)}
          isChoosing={option === OPTION_NAME.PickUp}>
          Pick Up
        </Option>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Total</Text>
        <Text style={styles.paymentNumber}>23,000</Text>
      </View>
      <CustomButton
        style={styles.buttonContainer}
        type="secondary"
        onPress={onTransitToPayment}>
        Proceed to payment
      </CustomButton>
    </ScrollView>
  );
};

export default DeliveryScreen;
