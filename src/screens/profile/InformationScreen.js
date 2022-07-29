import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  ICON_CHEVRON,
  ICON_CREDIT_CARD,
  ICON_DASHICONS_BANK,
  ICON_PAYPAL,
} from '../../assets/icons';
import {IMG_Marvis} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import RadioButton from '../../components/RadioButton';

const InformationScreen = props => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.ChevronIcon}>
          <Image source={ICON_CHEVRON} />
        </TouchableOpacity>

        <Text style={styles.profileText}>My profile</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.InformationText}>Information</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <View style={styles.BoxContainer}>
          <View style={styles.whiteBox}>
            <View>
              <Image source={IMG_Marvis} style={styles.MarvisIMG} />
            </View>
            <View style={styles.TextBox}>
              <Text style={styles.MarvisText}>Marvis Ighedosa</Text>
              <Text style={styles.otherText}>dosamarvis@gmail.com</Text>
              <Text style={styles.otherText}>
                No 15 uti street off ovie palace road effurun delta state
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.PaymentMethod}>
        <Text style={styles.PaymentText}>Payment method</Text>
      </View>
      <View style={styles.PaymentBoxContainer}>
        <View style={styles.whiteBox}>
          <View style={[styles.Box, styles.flex]}>
            <RadioButton />
            <View style={styles.rectangle}>
              <Image source={ICON_CREDIT_CARD} />
            </View>
            <Text style={styles.radioText}>Card</Text>
          </View>
          <View style={[styles.Box, styles.flex]}>
            <RadioButton />
            <View style={[styles.rectangle, styles.rectangleColor]}>
              <Image source={ICON_DASHICONS_BANK} />
            </View>
            <Text style={styles.radioText}>Bank account</Text>
          </View>
          <View style={[styles.Box, styles.Underline, styles.flex]}>
            <RadioButton />
            <View style={[styles.rectangle, styles.rectangleColorBlue]}>
              <Image source={ICON_PAYPAL} />
            </View>
            <Text style={styles.radioText}>Paypal</Text>
          </View>
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <CustomButton text={'Update'} label={'secondary'} />
      </View>
    </ScrollView>
  );
};

export default InformationScreen;
