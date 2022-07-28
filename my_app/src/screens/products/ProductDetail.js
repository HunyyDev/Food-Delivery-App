import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICEllipse, ICHeart, ICOnBack} from '../../assets/icons';
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
            <ICEllipse />
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
    marginTop: scale(65),
    marginLeft: scale(50),
    marginRight: scale(55.29),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  backgroundImage: {
    width: Dimensions.get('window').width,
    height: 269.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  ellipseContainer: {
    flexDirection: 'row',
    marginTop: scale(65),
    marginLeft: scale(172),
    marginRight: scale(174),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  titleContainer: {
    //flexDirection: 'row-reverse',
    marginTop: scale(76.85),
    width: scale(318),
    height: scale(52),
    marginLeft: scale(48),
    marginRight: scale(48),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  title: {
    //marginTop: scale(-10),
    fontSize: 28,
    fontFamily: FONT_FAMILY.SFProRounded_Semibold,
    color: CUSTOM_COLOR.Black,
    //marginLeft: scale(50),
  },
});
