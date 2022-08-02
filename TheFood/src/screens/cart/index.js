import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import {normalize, scaleX, scaleY} from '../../helperFunction';
import {ICSwipe} from '../../assets/icons';
import colors from '../../assets/constants/colors';

const data = [
  {
    _id: 0,
    name: 'Veggie tomato mix',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
  },
  {
    _id: 1,
    name: 'Fishwith mix orange juice',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
  },
  {
    _id: 2,
    name: 'Veggie tomato mix',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
  },
];

const CartScreen = () => {
  return (
    <View>
      <CustomBreadcrumbNavigation title={'Cart'} />
      <View style={styles.container}>
        <View style={styles.swipeNoticeContainer}>
          <ICSwipe />
          <Text style={styles.swipeNoticeContainer.text}>
            swipe on an item to delete
          </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.cartItem}
                onPress={() => {
                  console.log('4');
                }}>
                <Image source={item.icon} style={styles.cartItem.img} />
                <View style={styles.cartItem.info}>
                  <Text style={styles.cartItem.name}>{item.name}</Text>
                  <Text style={styles.cartItem.price}>#{item.price}</Text>

                  <TouchableOpacity style={styles.cartItem.button}>
                    <TouchableOpacity
                      style={{paddingHorizontal: scaleY(10)}}
                      onPress={() => {
                        console.log('2');
                      }}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity
                      style={{paddingHorizontal: scaleY(10)}}
                      onPress={() => {
                        console.log('3');
                      }}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scaleX(50),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeNoticeContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: scaleY(55),
    text: {
      color: colors.BLACK,
      fontSize: normalize(16),
      fontFamily: 'FontsFree-Net-Abel-Regular',
    },
  },

  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    padding: Math.max(scaleX(16), scaleY(16)),
    marginBottom: scaleY(14),

    img: {
      width: Math.max(scaleX(70), scaleY(70)),
      height: Math.max(scaleX(70), scaleY(70)),
      borderRadius: 100,
      overflow: 'hidden',
    },

    info: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginLeft: Math.max(scaleX(16), scaleY(16)),
      position: 'relative',
      flexGrow: 1,
    },

    name: {
      color: colors.BLACK,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(17),
    },

    price: {
      color: colors.VERMILION,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(15),
    },

    button: {
      backgroundColor: colors.VERMILION,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      right: 0,
      bottom: 0,

      position: 'absolute',
      paddingVertical: scaleY(2),
      borderRadius: normalize(30),
      zIndex: 1,
    },
  },
});
