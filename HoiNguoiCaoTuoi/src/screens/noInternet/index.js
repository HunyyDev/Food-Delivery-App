import React from 'react';
import {SafeAreaView, Image, Text, StyleSheet, View} from 'react-native';
import {IMG_Wifi_off} from '../../assets/images';
import {scaleWidth} from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import CustomButton from '../../components/CustomButton';

const NoInternet = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Logo */}
      <Image
        source={IMG_Wifi_off}
        style={{alignSelf: 'center', marginTop: scaleWidth(200)}}
      />
      <Text style={styles.title}>{'No internet Connection'}</Text>
      <Text style={styles.text}>
        {
          ' Your internet connection is currently\n not available please check or try again.'
        }
      </Text>
      {/* Button */}
      <View style={{marginTop: scaleWidth(50)}}>
        <CustomButton
          type={'secondary'}
          text={'Try again'}
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
  title: {
    fontFamily: FONT_FAMILY.SFPro,
    fontSize: scaleWidth(28),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
  },
  text: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scaleWidth(15),
    alignSelf: 'center',
    width: scaleWidth(350),
    textAlign: 'center',
  },
});

export default NoInternet;
