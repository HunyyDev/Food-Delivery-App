import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICNoInternet, ICHistory} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import FoodCard from '../home/slider/components/FoodCard';
import {ICHeart} from '../../assets/icons';

const foodCards = [
  {
    img: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    foodName: 'Veggie tomato mix',
    price: 'N1, 900',
  },
  {
    img: require('../../assets/images/foods/Rice/image_3.png'),
    foodName: 'Rice',
    price: 'N2, 100',
  },
  {
    img: require('../../assets/images/foods/Spicy_fish_sauce/image_2.png'),
    foodName: 'Spaghetti',
    price: 'N1, 800',
  },
  {
    img: require('../../assets/images/foods/Rice/image_3.png'),
    foodName: 'Noodle',
    price: 'N3, 200',
  },
];
const DetailScreen = props => {
  const {navigation} = props;
  const [imgActive, setImgActive] = useState(0);
  const onchange = nativeEvent => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomBreadcrumbNavigation
          onBack={() => navigation.goBack()}
          title=""
          RightIcon={() => {
            'true';
          }}
          onPressRightIcon={() => navigation.navigate(SCREEN_NAME.CART_SCREEN)}
        />
      </View>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          styles={styles.wrap}>
          {foodCards.map((e, index) => (
            <View key={index} style={styles.wrap.images}>
              <Image
                resizeMode="stretch"
                source={e.img}
                style={styles.wrap.images.image}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapDot}>
        {foodCards.map((e, index) => (
          <Text
            key={index}
            style={imgActive === index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
      <View style={styles.wrapInfo}>
        {foodCards.map((e, index) => (
          <View key={index}>
            <Text style={styles.wrapInfo.name}>
              {imgActive === index ? e.foodName : ''}
            </Text>
            <Text style={styles.wrapInfo.cost}>
              {imgActive === index ? e.price : ''}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.detailInfo}>
        <View style={styles.detailInfo.detail}>
          <Text style={styles.detailInfo.detail.header}>Delivery info</Text>
          <Text style={styles.detailInfo.detail.content}>
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </Text>
        </View>
        <View style={styles.detailInfo.detail}>
          <Text style={styles.detailInfo.detail.header}>Return policy</Text>
          <Text style={styles.detailInfo.detail.content}>
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton
          type="secondary"
          title="Add to cart"
          onPress={() => {
            Alert.alert('Notification', 'Add to cart successfully');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  wrap: {
    width: '100%',
    height: scaleY(250),
    // backgroundColor: CUSTOM_COLOR.WHITE,
    images: {
      width: Dimensions.get('window').width,
      alignSelf: 'center',
      justifyContent: 'center',
      image: {
        alignSelf: 'center',
        borderRadius: scaleY(200),
      },
    },
  },
  button: {
    position: 'absolute',
    bottom: scaleY(36),
    alignSelf: 'center',
  },
  wrapDot: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    marginHorizontal: 6,
    color: CUSTOM_COLOR.SILVER,
    fontSize: normalize(20),
  },
  dotActive: {
    marginHorizontal: 6,
    color: CUSTOM_COLOR.VERMILION,
    fontSize: normalize(20),
  },
  wrapInfo: {
    marginTop: scaleY(45),
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    name: {
      alignSelf: 'center',
      fontSize: normalize(28),
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
    },
    cost: {
      marginTop: scaleY(10),
      fontSize: normalize(22),
      fontFamily: 'FontsFree-Net-Abel-Regular',
      alignSelf: 'center',
      color: CUSTOM_COLOR.VERMILION,
    },
  },
  detailInfo: {
    width: scaleX(300),
    alignSelf: 'center',
    detail: {
      marginTop: scaleX(43),
      header: {
        fontSize: normalize(17),
        fontFamily: 'FontsFree-Net-Abel-Regular',
        color: CUSTOM_COLOR.BLACK,
      },
      content: {
        marginTop: scaleX(5),
        fontSize: normalize(15),
        fontFamily: 'FontsFree-Net-Abel-Regular',
        color: CUSTOM_COLOR.BLACK,
        opacity: 0.5,
      },
    },
  },
});

export default DetailScreen;
