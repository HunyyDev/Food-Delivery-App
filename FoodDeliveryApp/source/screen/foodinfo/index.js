import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/color';
import {IMG_FOOD1} from '../../assets/images';
import scale from '../../../responsive';
import {IC_Heart, IC_SmallCircle, IC_GoBack} from '../../assets/icons';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';



const FoodInfoScreen = ({ navigation: { goBack } }) => {
  const [isChoose, setIsChoose] = useState(false);
  const [isCircle, setIsCircle] = useState('1');
  const onPressHandler = () => {setIsChoose(!isChoose)}
  return (
    <View style={styles.container}>
      {/* Go back button */}
      <>
        <View style={styles.goBackContainer}>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={() => goBack()}>
            <IC_GoBack />
          </TouchableOpacity>
        </View>
      </>
      {/* Heart button */}
      <>
      <TouchableOpacity
        style={styles.heart}
        onPress={onPressHandler}>
        <IC_Heart
          fill={isChoose === true ? '#FA4A0C' : 'transparent'}
        />
      </TouchableOpacity>
      </>
      {/* Food swiper */}
      <>
        {/* <Swiper style={styles.swiperContainer}> */}
          {/* Food */}
          <>
          <View style={styles.foodView}>
            <Image style={styles.food} source={IMG_FOOD1}/>
          </View>
          </>
          {/* Select */}
          <>
          <View style={styles.selectView}>
            <TouchableOpacity
              style={[styles.iconContainer, styles.ic_smallCircle1]}
              onPress={() => {
                setIsCircle('1');  }}
              >
              <IC_SmallCircle fill={
                isCircle === '1' ? CUSTOM_COLOR.SunsetOrange : '#C4C4C4'
              }/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconContainer, styles.ic_smallCircle2]}
              onPress={() => {
                setIsCircle('2');  }}
              >
              <IC_SmallCircle fill={
                isCircle === '2' ? CUSTOM_COLOR.SunsetOrange : '#C4C4C4'
              }/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconContainer, styles.ic_smallCircle3]}
              onPress={() => {
                setIsCircle('3');  }}
              >
              <IC_SmallCircle fill={
                isCircle === '3' ? CUSTOM_COLOR.SunsetOrange : '#C4C4C4'
              }/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconContainer, styles.ic_smallCircle4]}
              onPress={() => {
                setIsCircle('4');  }}
              >
              <IC_SmallCircle fill={
                isCircle === '4' ? CUSTOM_COLOR.SunsetOrange : '#C4C4C4'
              }/>
            </TouchableOpacity>
          </View>
          </>
          {/* Food name */}
          <>
            <Text style={styles.foodName}>Veggie tomato mix</Text>
          </>
        {/* </Swiper> */}
      </>
      
      {/* Food price */}
      <>
        <Text style={styles.foodPrice}>N1,900</Text>
      </>
      {/* Delivery info */}
      <>
        <Text style={styles.deliveryInfo}>Delivery info</Text>
      </>
       {/* Delivery description */}
       <>
        <Text style={styles.deliveryDescription}>{'Delivered between monday aug and thursday 20 \nfrom 8pm to 91:32 pm'}</Text>
      </>
      {/* Return policy */}
      <>
        <Text style={styles.returnPolicy}>Return policy</Text>
      </>
       {/* Return policy description */}
       <>
        <Text style={styles.returnPolicyDescription}>{'All our foods are double checked before leaving \nour stores so by any case you found a broken \nfood please contact our hotline immediately.'}</Text>
      </>
      {/* button */}
      <>
        <Custom_ButtonOne
          text="Add to cart"
          textColor={CUSTOM_COLOR.White}
          color={CUSTOM_COLOR.SunsetOrange}
          //onPress={() => this.props.navigation.navigate('Login')}
        />
      </>
    </View>
  );
};

export default FoodInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  hitSlop: {
    top: scale(10),
    left: scale(10),
    right: scale(10),
    bottom: scale(10),
  },
  heart: {
    position: 'absolute',
    left: scale(341.29),
    top: scale(42.5),
  },
  swiperContainer: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  foodView: {
    position: 'absolute',
    width: scale(241),
    height: scale(241),
    borderRadius: 360,
    left: scale(86),
    top: scale(80.06),
    overflow: 'hidden',
  },
  food: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    width: '100%',
    height: '100%',
  },
  ic_smallCircle1: {
    position: 'absolute',
    marginLeft: scale(0),
  },
  ic_smallCircle2: {
    position: 'absolute',
    marginLeft: scale(20),
  },
  ic_smallCircle3: {
    position: 'absolute',
    marginLeft: scale(40),
  },
  ic_smallCircle4: {
    position: 'absolute',
    marginLeft: scale(60),
  },
  selectView: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: scale(80),
    height: scale(8),
    left: scale(168),
    top: scale(350),
  },
  foodName: {
    position: 'absolute',
    left: scale(82),
    top: scale(370),
    fontWeight: '400',
    fontSize: scale(28),
    lineHeight: scale(36),
    textAlign: 'center',
    color: CUSTOM_COLOR.Black,
  },
  foodPrice: {
    color: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    left: scale(170),
    top: scale(420),
    fontWeight:'400',
    fontSize: scale(22),
    lineHeight: scale(28),
    textAlign: 'center',
  },
  deliveryInfo: {
    position: 'absolute',
    left: scale(53),
    top: scale(480),
    fontWeight: '400',
    fontSize: scale(17),
    lineHeight: scale(22),
    color: CUSTOM_COLOR.Black,
  },
  deliveryDescription: {
    position: 'absolute',
    left: scale(53),
    top: scale(510),
    fontWeight: '400',
    fontSize: scale(15),
    lineHeight: scale(21),
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
  },
  returnPolicy: {
    position: 'absolute',
    left: scale(53),
    top: scale(560),
    fontWeight: '400',
    fontSize: scale(17),
    lineHeight: scale(22),
    color: CUSTOM_COLOR.Black,
  },
  returnPolicyDescription: {
    position: 'absolute',
    left: scale(53),
    top: scale(590),
    fontWeight: '400',
    fontSize: scale(15),
    lineHeight: scale(21),
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
  },
});
