import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_IconButton from '../../components/CUSTOM_IconButton'
import CUSTOM_COLOR from '../../constants/color';
import CUSTOM_SearchBar from '../../components/CUSTOM_SearchBar'
import FONT_FAMILY from '../../constants/fonts';
import {
  ICON_HOUSE,
  ICON_CLOCK,
  ICON_HEART,
  ICON_USER,
  ICON_MENU,
  ICON_SHOPPING,
} from '../../assets/icons';
import scale from '../../../responsive';
import CUSTOM_FoodScrollView from '../../components/CUSTOM_FoodScrollView';
import CUSTOM_CategoryScrollView from '../../components/CUSTOM_CategoryScrollView';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <></>
      {/* Icon Menu */}
      <CUSTOM_IconButton
        style={styles.menuContainer}
        icon={ICON_MENU}
      />
      <></>
      {/* Icon Shopping */}
      <CUSTOM_IconButton
        style={styles.shoppingContainer}
        icon={ICON_SHOPPING}
      />
      <></>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
      </View>
      <></>
      {/* Search Box */}
      <CUSTOM_SearchBar
        placeholderText={'Search'}
        placeholderColor={CUSTOM_COLOR.Black}
        style={styles.searchInput}
        hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
      />
      <></>
      {/* See more */}
      <TouchableOpacity style={styles.seeMore}>
        <Text style={styles.textSeeMore}>{'see more'}</Text>
      </TouchableOpacity>
      <></>
      {/* Foods */}
      <CUSTOM_FoodScrollView style={{top: scale(420)}}/>
      <CUSTOM_CategoryScrollView />
      <></>
      {/* Button Line */}
      <CUSTOM_IconButton
        style={styles.homeContainer}
        icon={ICON_HOUSE}
      />
      <CUSTOM_IconButton
        style={styles.heartContainer}
        icon={ICON_HEART}
      />
      <CUSTOM_IconButton
        style={styles.userContainer}
        icon={ICON_USER}
      />
      <CUSTOM_IconButton
        style={styles.clockContainer}
        icon={ICON_CLOCK}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concreate,
  },
  menuContainer: {
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: 2,
    left: scale(54.6),
    top: scale(74),
  },
  shoppingContainer: {
    position: 'absolute',
    left: scale(349),
    top: scale(65),
    opacity: scale(0.7),
  },
  titleContainer: {
    width: scale(300),
    height: scale(82),
    top: scale(132),
    left: scale(50),
    position: 'absolute',
  },
  title: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: scale(34),
    fontWeight: '700',
    position: 'absolute',
    top: scale(-10),
  },
  searchInput: {
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    top: scale(242), 
    left: scale(50), 
    position: 'absolute'
  },
  seeMore: {
    position: 'absolute',
    left: scale(315),
    top: scale(380),
  },
  textSeeMore: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontWeight: '400',
  },
  homeContainer: {
    position: 'absolute',
    left: scale(50),
    top: scale(750)
  },
  heartContainer: {
    position: 'absolute',
    left: scale(159),
    top: scale(750)
  },
  userContainer: {
    position: 'absolute',
    left: scale(245),
    top: scale(750)
  },
  clockContainer: {
    position: 'absolute',
    left: scale(333),
    top: scale(750)
  },
});
