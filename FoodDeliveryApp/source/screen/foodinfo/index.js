import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/color';
import {IMG_FOOD1, IMG_FOOD2, IMG_FOOD3} from '../../assets/images';
import scale from '../../../responsive';
import {IC_Heart, IC_SmallCircle, IC_GoBack} from '../../assets/icons';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';

const images = [IMG_FOOD1, IMG_FOOD2, IMG_FOOD3];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const FoodInfoScreen = ({navigation: {goBack}}) => {
  const [isChoose, setIsChoose] = useState(false);
  const onPressHandler = () => {
    setIsChoose(!isChoose);
  };
  const [imgActive, setImgActive] = useState(0);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity style={styles.heart} onPress={onPressHandler}>
          <IC_Heart fill={isChoose === true ? '#FA4A0C' : 'transparent'} />
        </TouchableOpacity>
      </>
      {/* Food swiper */}
      <>
      <View style={styles.wrap}>
        <ScrollView 
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.foodView}
        >
          {
            images.map((e, index) => 
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.food}
                source={e}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </>
      {/* Food name */}
      <>
        <Text style={styles.foodNameActive}>Veggie tomato mix</Text>
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
        <Text style={styles.deliveryDescription}>
          {
            'Delivered between monday aug and thursday 20 \nfrom 8pm to 91:32 pm'
          }
        </Text>
      </>
      {/* Return policy */}
      <>
        <Text style={styles.returnPolicy}>Return policy</Text>
      </>
      {/* Return policy description */}
      <>
        <Text style={styles.returnPolicyDescription}>
          {
            'All our foods are double checked before leaving \nour stores so by any case you found a broken \nfood please contact our hotline immediately.'
          }
        </Text>
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
    </SafeAreaView>
  );
};

export default FoodInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  wrap: {
    width: '100%',
    height: '100%',
    left: scale(25),
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    left: scale(168),
    top: scale(315),
  },
  dotActive: {
    margin: 3,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  dot: {
    margin: 3,
    color: '#C4C4C4',
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
  foodView: {
    position: 'absolute',
    width: scale(207),
    height: scale(241),
    borderRadius: 360,
    left: scale(86),
    top: scale(80.06),
    overflow: 'hidden',
  },
  food: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.25,
    borderRadius: 360,
  },
  foodNameActive: {
    position: 'absolute',
    left: scale(82),
    top: scale(370),
    // flexDirection: 'row',
    // alignSelf:'center',
    // margin: 3,
    fontWeight: '400',
    fontSize: scale(28),
    lineHeight: scale(36),
    textAlign: 'center',
    color: CUSTOM_COLOR.Black,
  },
  foodName: {
    position: 'absolute',
    left: scale(82),
    top: scale(370),
    // flexDirection: 'row',
    // alignSelf:'center',
    // margin: 3,
    fontWeight: '400',
    fontSize: scale(28),
    lineHeight: scale(36),
    textAlign: 'center',
    color: 'transparent',
  },
  foodPrice: {
    color: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    left: scale(170),
    top: scale(420),
    fontWeight: '400',
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
