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
import LargeButton from '../../components/LargeButton';
import RadioButton from '../../components/RadioButton';
import RoundedWhiteBox from '../../components/RoundedWhiteBox';

const MyProfileScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.ChevronIcon}>
          <Image source={ICON_CHEVRON} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.MyProfileText}>My profile</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.PersonalText}>Personal details</Text>
        <Text style={styles.changeText}>change</Text>
      </View>
      <View style={styles.PersonalBox}>
        <View style={styles.whiteBox}>
          <View>
            <Image source={IMG_Marvis} style={styles.MarvisIMG1} />
          </View>
          <View style={styles.TextBox1}>
            <Text style={styles.MarvisText}>Marvis Ighedosa</Text>
            <Text style={styles.otherText}>dosamarvis@gmail.com</Text>
            <View style={styles.phoneBox}>
              <Text style={styles.otherText}>+234 9011039271</Text>
            </View>
            <Text style={styles.otherText}>
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </View>
      </View>
      <View>
        <RoundedWhiteBox label={'Orders'} />
        <RoundedWhiteBox label={'Pending reviews'} />
        <RoundedWhiteBox label={'Faq'} />
        <RoundedWhiteBox label={'Help'} />
      </View>
      <View style={styles.ButtonContainer}>
        <LargeButton text={'Update'} label={'secondary'} />
      </View>
    </ScrollView>
  );
};

export default MyProfileScreen;
