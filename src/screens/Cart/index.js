import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import scale from '../../assets/constants/responsive';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import {
  IMG_Back,
  IMG_ArrowLeft,
  IMG_ArrowRight,
  IMG_BodyArrow,
  IMG_Hand,
  IMG_FishWith,
  IMG_Viggie,
} from '../../assets/images';

const CartScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Cart</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>{'swipe on an item to delete'}</Text>
        <Image source={IMG_BodyArrow} />
        <Image source={IMG_BodyArrow} />
        <Image source={IMG_Hand} />
        <Image source={IMG_ArrowLeft} style={styles.arrowLeft} />
        <Image source={IMG_ArrowRight} style={styles.arrowRight} />
      </View>
      <View style={styles.FoodContainer}>
        <Image source={IMG_Viggie} style={styles.foodImage} />
        <Text style={styles.foodText}>{'Veggie tomato mix'}</Text>
        <Text style={styles.foodCost}>{'#1,900'}</Text>
      </View>
      <View style={styles.FoodContainer}>
        <Image source={IMG_FishWith} style={styles.foodImage} />
        <Text style={styles.foodText}>{'Fishwith mix orange....'}</Text>
        <Text style={styles.foodCost}>{'#1,900'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeliveryScreen')}
        style={styles.buttonSelection}>
        <Text style={styles.SelectionText}>{'Complete order'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    top: scale(30),
    height: scale(40),
    width: '100%',
    position: 'absolute',
  },
  textTitle: {
    marginTop: scale(7),
    fontSize: scale(23),
    fontFamily: FONT_FAMILY.SFProTextBold,
    color: CUSTOM_COLOR.Black,
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
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  noteContainer: {
    marginTop: scale(120),
    height: scale(25),
    width: scale(200),
    alignSelf: 'center',
  },
  noteText: {
    height: scale(30),
    width: scale(170),
    fontFamily: FONT_FAMILY.SFProTextBold,
    fontSize: scale(12),
    color: CUSTOM_COLOR.Black,
    top: scale(3),
    left: scale(30),
    position: 'absolute',
  },
  arrowLeft: {
    top: -19.75,
  },
  arrowRight: {
    top: -25,
    left: 6.5,
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    bottom: scale(41),
    alignSelf: 'center',
    position: 'absolute',
  },
  FoodContainer: {
    height: scale(120),
    width: '70%',
    marginTop: scale(30),
    backgroundColor: CUSTOM_COLOR.White,
    alignSelf: 'center',
    borderRadius: scale(20),
  },
  foodImage: {
    borderRadius: scale(50),
    marginTop: scale(13),
    marginLeft: scale(14),
  },
  foodText: {
    position: 'absolute',
    marginTop: scale(30),
    color: CUSTOM_COLOR.Black,
    fontSize: 17,
    marginLeft: scale(125),
  },
  foodCost: {
    position: 'absolute',
    marginLeft: scale(130),
    marginTop: scale(65),
    fontSize: 15,
    color: CUSTOM_COLOR.GoldDrop,
  }
});
