import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import CustomOrderedItem from './components/CustomOrderedItem';
import {IMG_Veggie_tomato_mix} from '../../assets/images';
import {IC_Swipe} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.guide}>
        <Image source={IC_Swipe} />
        <Text>swipe on an item to delete</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.listItem}>
            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Veggie tomato mix"
              price={1900}
            />

            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Fishwith mix orange..."
              price={1900}
            />
            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Fishwith mix orange..."
              price={1900}
            />
            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Fishwith mix orange..."
              price={1900}
            />
            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Fishwith mix orange..."
              price={1900}
            />
            <CustomOrderedItem
              img={IMG_Veggie_tomato_mix}
              text="Fishwith mix orange..."
              price={1900}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.button}>
        <CustomButton type="secondary" text="Complete order" />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },
  guide: {
    flex: 1,
    fontFamily: FONT_FAMILY.Light,
    fonSize: scale(10),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  main: {
    flex: 10,
  },

  button: {
    flex: 2,
    bottom: 15,
  },

  listItem: {
    flex: 1,
    alignItems: 'center',
  },

  item: {
    height: '20%',
  },
});
