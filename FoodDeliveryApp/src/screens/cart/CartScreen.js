import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import CustomOrderedItem from './components/CustomOrderedItem';
import {IMG_Chicken, IMG_Egg, IMG_Veggie_tomato_mix} from '../../assets/images';
import {IC_Swipe} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FlatList } from 'react-native-gesture-handler';

const CartScreen = props => {
  const listCart=[
    {
      id: 1,
      img:IMG_Veggie_tomato_mix,
      name:"Veggie tomato mix...",
      price:"1900",
    },
    {
      id: 2,
      img:IMG_Egg,
      name:"Egg and cucumber...",
      price:"1900",
    },
    {
      id: 3,
      img:IMG_Chicken,
      name:"Fried chicken m...",
      price:"1900",
    },
    {
      id: 4,
      img:IMG_Veggie_tomato_mix,
      name:"Fish with mix orange...",
      price:"1900",
    },
  ];
  const listMember = ({item}) =>(
    <CustomOrderedItem
      img={item.img}
      text={item.name}
      price={item.price}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, width: '80%'}}>
        <View style={styles.header}>
          <CustomHeaderGoBack
            title="Cart"
            leftOnPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.center}>
          <View style={styles.center.guide}>
            <Image source={IC_Swipe} />
            <Text>swipe on an item to delete</Text>
          </View>
          <View style={styles.center.main}>
            <FlatList
              data={listCart}
              renderItem={listMember}
            />
            
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton
            type={'secondary'}
            text={'Complete order'}
            onPress={() => {
              props.navigation.navigate('Delivery');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    alignItems: 'center',
  },

  header: {
    flex: 1,
  },

  center: {
    flex: 8,
    guide: {
      height: '5%',
      fontFamily: FONT_FAMILY.Light,
      fonSize: scale(10),
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    main: {
      flex: 1,
    },
  },

  button: {
    flex: 1,
    bottom: 15,
  },

  listItem: {
    alignItems: 'center',
  },
});
