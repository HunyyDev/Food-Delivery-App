import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICEllipse, ICEllipseColor, ICHeart, ICOnBack} from '../../assets/icons';
import {IMG_Veggie} from '../../assets/images';

const ProductDetail = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* View Top */}
      <>
        <View style={styles.icContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <ICOnBack />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <ICHeart />
          </TouchableOpacity>
        </View>
      </>

      <>
        <ImageBackground style={styles.backgroundImage}>
          <Image source={IMG_Veggie} resizeMode={'contain'} />
        </ImageBackground>
      </>
      <>
        <View style={styles.ellipseContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <ICEllipseColor />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <ICEllipse />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <ICEllipse />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <ICEllipse />
          </TouchableOpacity>
        </View>
      </>

      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Veggie tomato mix'}</Text>
        </View>
      </>

      <>
        <View style={styles.priceContainer}>
          <Text style={styles.titlePrice}>{'N1,900'}</Text>
        </View>
      </>

      <>
        <View>
          <Text style={[styles.titleInfo, {marginTop: scale(20)}]}>
            {'Delivery info'}
          </Text>
        </View>

        <View style={styles.deliveryInfoContainer}>
          <Text style={[styles.textBox]}>
            {
              'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm'
            }
          </Text>
        </View>
      </>

      <>
        <View>
          <Text style={[styles.titleInfo, {marginTop: scale(10)}]}>
            {'Return policy'}
          </Text>
        </View>

        <View style={styles.returnPolicyContainer}>
          <Text style={[styles.textBox]}>
            {
              'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.'
            }
          </Text>
          <>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.titleButtonSecondary}>{'Add to cart'}</Text>
            </TouchableOpacity>
          </>
        </View>
      </>

      {/* <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
        <Text style={styles.title}>On Back</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  icContainer: {
    flexDirection: 'row',
    marginTop: scale(35),
    marginLeft: scale(50),
    marginRight: scale(55.29),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  backgroundImage: {
    width: scale(405.73),
    height: scale(269.09),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  ellipseContainer: {
    flexDirection: 'row',
    marginTop: scale(23.85),
    marginLeft: scale(172),
    marginRight: scale(174),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    //backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  titleContainer: {
    //flexDirection: 'row-reverse',
    marginTop: scale(20),
    width: scale(318),
    height: scale(52),
    marginLeft: scale(48),
    marginRight: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  title: {
    fontSize: 28,
    fontFamily: FONT_FAMILY.SFProRounded_Bold,
    color: CUSTOM_COLOR.Black,
  },

  priceContainer: {
    marginTop: scale(-10),
    marginLeft: scale(121),
    marginRight: scale(121),
    height: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titlePrice: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.SFProRounded_Bold,
    color: CUSTOM_COLOR.SunsetOrange,
  },

  titleInfo: {
    marginLeft: scale(53),
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProRounded_Bold,
    color: CUSTOM_COLOR.Black,
  },

  deliveryInfoContainer: {
    height: scale(77),
    marginLeft: scale(53),
    marginRight: scale(64),
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  returnPolicyContainer: {
    height: scale(158),
    marginLeft: scale(53),
    marginRight: scale(64),
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  textBox: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProText_Regular,
    color: CUSTOM_COLOR.Black,
  },

  buttonSecondary: {
    marginTop: scale(15),
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },

  titleButtonSecondary: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
    color: CUSTOM_COLOR.White,
  },
});
