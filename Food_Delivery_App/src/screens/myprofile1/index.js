import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import CUSTOM_COLORS from '../../constants/colors';
import {SafeAreaView} from 'react-navigation';
import scale from '../../constants/responsive';
import {IC_GoBack} from '../../assets/icons';
import {TouchableOpacity} from 'react-native';
import FONT_FAMILY from '../../constants/font';
import {Image} from 'react-native';
import {IMG_AVATAR} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import GoBack from '../HomeScreen/components/GoBack';

const MyInforScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Go back button */}
      <GoBack navigation={navigation} />

      {/* Text: My Profile */}
      <Text style={styles.textMyProfile}>My Profile</Text>

      {/* Text: My Personal Details */}
      <Text style={styles.textPersonal}>Personal Details</Text>

      {/*View: My Personal Details */}
      <View style={styles.viewPersonal}>
        <Image source={IMG_AVATAR} style={styles.avatar}></Image>
      </View>

      {/*view: Orders */}
      <View style={styles.viewOrders}>
        <Text style={styles.textOrders}>Orders</Text>
      </View>

      {/*view: Pending */}
      <View style={styles.viewPending}>
        <Text style={styles.textOrders}>Pending reviewers</Text>
      </View>

      {/*view: Faq */}
      <View style={styles.viewFaq}>
        <Text style={styles.textOrders}>Faq</Text>
      </View>

      {/*view: Help */}
      <View style={styles.viewHelp}>
        <Text style={styles.textOrders}>Help</Text>
      </View>

      {/*Button: update */}
      <CustomButton
        title="Update"
        type="secondary"
        name=""
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.Athens_Gray,
  },

  textMyProfile: {
    fontFamily: FONT_FAMILY.Abel,
    fontSize: scale(34),
    left: scale(50),
    top: scale(124),
    color: CUSTOM_COLORS.Black,
    width: scale(170),
    position: 'absolute',
  },
  textPersonal: {
    fontFamily: FONT_FAMILY.Abel,
    fontSize: scale(18),
    left: scale(42),
    top: scale(209),
    color: CUSTOM_COLORS.Black,

    position: 'absolute',
  },
  viewPersonal: {
    width: scale(315),
    height: scale(197),
    left: scale(42),
    top: scale(241),
    backgroundColor: CUSTOM_COLORS.White,
    borderRadius: scale(20),
  },

  avatar: {
    position: 'absolute',
    left: scale(16),
    bottom: scale(79),
    borderRadius: scale(10),
    width: scale(91),
    height: scale(100),
  },
  viewOrders: {
    width: scale(315),
    height: scale(60),
    left: scale(42),
    top: scale(280),
    backgroundColor: CUSTOM_COLORS.White,
    borderRadius: scale(20),
  },
  viewPending: {
    width: scale(315),
    height: scale(60),
    left: scale(42),
    top: scale(305),
    backgroundColor: CUSTOM_COLORS.White,
    borderRadius: scale(20),
  },
  viewFaq: {
    width: scale(315),
    height: scale(60),
    left: scale(42),
    top: scale(330),
    backgroundColor: CUSTOM_COLORS.White,
    borderRadius: scale(20),
  },
  viewHelp: {
    width: scale(315),
    height: scale(60),
    left: scale(42),
    top: scale(355),
    backgroundColor: CUSTOM_COLORS.White,
    borderRadius: scale(20),
  },
  textOrders: {
    fontFamily: FONT_FAMILY.Abel,
    fontSize: scale(18),
    left: scale(23),
    top: scale(15),
    color: CUSTOM_COLORS.Black,
    width: scale(200),

    position: 'absolute',
  },
});
export default MyInforScreen;
