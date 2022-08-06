import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {IMG_History} from '../../assets/images';
import {scaleWidth} from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_chevron_left} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';

const History = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* back button */}
      <TouchableOpacity
        style={styles.backContainer}
        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image source={IMG_chevron_left} />
      </TouchableOpacity>
      {/* title */}
      <Text style={{top: scaleWidth(55), textAlign: 'center'}}>
        {'History'}
      </Text>
      {/* Logo */}
      <Image
        source={IMG_History}
        style={{alignSelf: 'center', marginTop: scaleWidth(200)}}
      />
      <Text style={styles.title}>{'No history yet'}</Text>
      <Text style={styles.text}>
        {'Hit the orange button down below to Create an order.'}
      </Text>
      <></>
      {/* Button */}
      <View style={{marginTop: scaleWidth(50)}}>
        <CustomButton
          type={'secondary'}
          text={'Start ordering'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
  //   }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  backContainer: {
    width: scaleWidth(6),
    height: scaleWidth(12),
    top: scaleWidth(66),
    left: scaleWidth(50),
  },
  title: {
    fontFamily: FONT_FAMILY.SFPro,
    fontSize: scaleWidth(28),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    marginVertical: 20,
  },
  text: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scaleWidth(15),
    alignSelf: 'center',
    width: scaleWidth(250),
    textAlign: 'center',
  },
});

export default History;
