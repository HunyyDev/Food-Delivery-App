import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMG_Back, IMG_Card, IMG_Bank} from '../../assets/images';
import styles from './styles';
import CUSTOM_COLOR from '../../assets/constants/colors';

const DeliveryScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{'Checkout'}</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <Text style={styles.formText}>{'Payment'}</Text>
      <Text style={styles.text1}>{'Payment method'}</Text>
      <View style={styles.paymentContainer}>
        <View style={styles.payment}>
          <View style={[styles.paymentTextView, {borderBottomWidth: 1}]}>
            <Text style={styles.paymentText}>{'Card'}</Text>
            <View
              style={[
                styles.iconView,
                {backgroundColor: CUSTOM_COLOR.GoldDrop},
              ]}>
              <Image source={IMG_Card} />
            </View>
          </View>
          <View style={styles.paymentTextView}>
            <Text style={styles.paymentText}>{'Bank'}</Text>
            <View
              style={[
                styles.iconView,
                {backgroundColor: CUSTOM_COLOR.RaspberryPink},
              ]}>
              <Image source={IMG_Bank} />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.methodText}>{'Delivery method.'}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.doorOrPickupContainer}>
          <Text style={[styles.doorOrPickupText, {borderBottomWidth: 1}]}>
            {'Door delivery'}
          </Text>
          <Text style={styles.doorOrPickupText}>{'Pick up'}</Text>
        </View>
        <View style={styles.selectedButton}></View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{'Total'}</Text>
        <Text style={styles.cost}>{'23,000'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('WaitingForUpgrade')}
        style={styles.buttonSelection}>
        <Text style={styles.SelectionText}>{'Proceed to payment'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
