import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import scale from '../../assets/constants/reponsive';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import {IMG_Food, IMG_GoBack, IMG_BlackHeart} from '../../assets/images';

const ProductDetail = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>My profile</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_GoBack} style={styles.iconBack} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.HeartButton}>
          <Image source={IMG_BlackHeart} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundImage}>
        <Image source={IMG_Food} style={styles.Image} />
      </View>
      <View>
        <View style={styles.backgroundName}>
          <Text style={styles.textFoodContainer}>Veggie tomato mix</Text>
        </View>
        <View style={styles.backgroundPrice}>
          <Text style={styles.textPriceContainer}>$1,900</Text>
        </View>
      </View>
      <View style={styles.backgroundInfo}>
        <Text style={styles.division}>Delivery info</Text>
        <Text style={styles.content}>
          {'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm.'}
        </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.division}>Return policy</Text>
        <Text style={styles.content}>
          All our foods are double checked before leaving our stores so by any
          case you found a broken food please contact our hotline immediately.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Add to cart'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    top: scale(60),
    height: scale(40),
    width: '100%',
    position: 'absolute',
  },
  textTitle: {
    marginTop: scale(7),
    fontSize: scale(23),
    fontFamily: FONT_FAMILY.SFProTextBold,
    color: CUSTOM_COLOR.Black,
    width: scale(150),
    left: scale(150),
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  HeartButton: {
    height: '100%',
    width: scale(50),
    position: 'absolute',
    right: scale(60),
    marginTop: scale(10),
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: scale(269.09),
    top: scale(100),
    justifyContent: 'center',
    position: 'absolute',
  },
  Image: {
    height: scale(225),
    width: scale(225),
    borderRadius: 90,
    alignSelf: 'center',
  },
  backgroundName: {
    width: '60%',
    height: scale(50),
    alignSelf: 'center',
    justifyContent: 'center',
    top: scale(400),
  },
  backgroundPrice: {
    width: '40%',
    height: scale(50),
    alignSelf: 'center',
    justifyContent: 'center',
    top: scale(400),
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'center',
    position: 'absolute',
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 15,
    alignSelf: 'center',
    lineHeight: 20,
    position: 'absolute',
  },
  backgroundInfo: {
    width: '80%',
    height: scale(200),
    alignSelf: 'center',
    position: 'absolute',
    top: scale(525),
  },
  division: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 16,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  content: {
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    top: scale(775),
    alignSelf: 'center',
    position: 'absolute',
  },
});
