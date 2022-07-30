import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMG_Back} from '../../assets/images';
import styles from './styles';

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
      <Text style={styles.formText}>{'Delivery'}</Text>
      <Text style={styles.text1}>{'Address details'}</Text>
      <TouchableOpacity style={styles.changeButton}>
        <Text style={styles.changeButtonText}>{'Change'}</Text>
      </TouchableOpacity>
      <View style={styles.paymentContainer}>
        <View style={styles.address}>
          <Text style={[styles.addressText, {borderBottomWidth: 0.5}]}>
            {'Marvis Kparobo'}
          </Text>
          <Text style={[styles.addressText, {borderBottomWidth: 0.5}]}>
            {'Km 5 refinery road oppsite re public road, effurun, delta state'}
          </Text>
          <Text style={styles.addressText}>{'+234 9011039271'}</Text>
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
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{'Total'}</Text>
        <Text style={styles.cost}>{'23,000'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('PaymentScreen')}
        style={styles.buttonSelection}>
        <Text style={styles.SelectionText}>{'Proceed to payment'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
