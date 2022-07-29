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
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';

const CartScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerSection}>
          <CustomHeaderGoBack
            title="Cart"
            leftOnPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.guide}>
          <Image source={IC_Swipe} />
          <Text>swipe on an item to delete</Text>
        </View>
        <View style={styles.main}>
          <ScrollView>
            <View style={styles.listItem}>
              <CustomOrderedItem
                img={IMG_Veggie_tomato_mix}
                text="Veggie tomato mix..."
                price={'1900'}
              />

              <CustomOrderedItem
                img={IMG_Veggie_tomato_mix}
                text="Fishwith mix orange..."
                price={'1900'}
              />

              <CustomOrderedItem
                img={IMG_Veggie_tomato_mix}
                text="Fishwith mix orange..."
                price={'1900'}
              />

              <CustomOrderedItem
                img={IMG_Veggie_tomato_mix}
                text="Fishwith mix orange..."
                price={'1900'}
              />
              <CustomOrderedItem
                img={IMG_Veggie_tomato_mix}
                text="Fishwith mix orange..."
                price={'1900'}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <CustomButton
            type={'secondary'}
            text={'Complete order'}
            onPress={() => {
              props.navigation.navigate('Payment');
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
  subContainer: {
    flex: 1,
    width: '80%',
  },
  headerSection: {
    flex: 1,
  },
  guide: {
    flex: 1,
    fontFamily: FONT_FAMILY.Light,
    fonSize: scale(10),
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  main: {
    flex: 10,
  },

  button: {
    flex: 2,
    bottom: 20,
  },

  listItem: {
    alignItems: 'center',
  },
});
