import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Custom_IconButton from '../home/components/Custom_IconButton';
import CUSTOM_COLOR from '../../constants/color';
import Custom_SearchBar from '../home/components/Custom_SearchBar';
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
import Custom_FoodScrollView from '../home/components/Custom_FoodScrollView';
import Custom_CategoryScrollView from '../home/components/Custom_CategoryScrollView';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <></>
        {/* Icon Menu */}
        <Custom_IconButton style={styles.menuContainer} icon={ICON_MENU} />
        <></>
        {/* Icon Shopping */}
        <Custom_IconButton
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
        <Custom_SearchBar
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
        <Custom_FoodScrollView style={{top: scale(420)}} />
        <Custom_CategoryScrollView />
        <></>
        {/* Button Line */}
        <Custom_IconButton style={styles.homeContainer} icon={ICON_HOUSE} />
        <Custom_IconButton style={styles.heartContainer} icon={ICON_HEART} />
        <Custom_IconButton style={styles.userContainer} icon={ICON_USER} />
        <Custom_IconButton style={styles.clockContainer} icon={ICON_CLOCK} />
      </SafeAreaView>
    );
  }
}

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
    position: 'absolute',
    top: scale(-10),
  },
  searchInput: {
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    top: scale(242),
    left: scale(50),
    position: 'absolute',
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
    top: scale(750),
  },
  heartContainer: {
    position: 'absolute',
    left: scale(159),
    top: scale(750),
  },
  userContainer: {
    position: 'absolute',
    left: scale(245),
    top: scale(750),
  },
  clockContainer: {
    position: 'absolute',
    left: scale(333),
    top: scale(750),
  },
});
