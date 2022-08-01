import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import Custom_IconButton from './components/Custom_IconButton';
import CUSTOM_COLORS from '../../constants/colors';
import Custom_SearchBar from './components/Custom_SearchBar';
import FONT_FAMILY from '../../constants/font';

import {
  ICON_HOUSE,
  ICON_CLOCK,
  ICON_HEART,
  ICON_USER,
  ICON_MENU,
  ICON_SHOPPING,
} from '../../assets/icons';

import scale from '../../constants/responsive';
import foodBoard from './foodBoard';
import Custom_FoodScrollView from '../HomeScreen/components/Custom_FoodScrollView';
import Custom_CategoryScrollView from '../HomeScreen/components/Custom_CategoryScrollView';
import OnBoardingScreen from '../OnBoardingScreen';
import Login from '../auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {cos} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const MainHomeScreen = props => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Icon Menu */}
      <Pressable
        style={styles.menuContainer}
        onPress={() => props.navigation.openDrawer()}>
        <Image source={ICON_MENU} style={styles.menuIcon} />
      </Pressable>
      <></>
      {/* Icon Shopping */}
      <Custom_IconButton
        style={styles.shoppingContainer}
        icon={ICON_SHOPPING}
        navigation={props.navigation}
        name={'CS'}
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
        placeholderColor={CUSTOM_COLORS.Black}
        style={styles.searchInput}
        hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
        navigation={props.navigation}
        namee={'SS'}
      />
      <></>
      {/* See more */}
      <TouchableOpacity style={styles.seeMore}>
        <Text style={styles.textSeeMore}>{'see more'}</Text>
      </TouchableOpacity>
      <></>
      {/* Foods */}
      <Custom_FoodScrollView
        style={{top: scale(420)}}
        navigation={props.navigation}
        foodBoard={foodBoard}
      />
      <Custom_CategoryScrollView />
      <></>
      {/* Button Line */}
      <View style={styles.buttonContainer}>
        <Custom_IconButton
          icon={ICON_HOUSE}
          navigation={props.navigation}
          name={'HIS'}
        />
        <Custom_IconButton
          icon={ICON_HEART}
          navigation={props.navigation}
          name={'HIS'}
        />
        <Custom_IconButton
          icon={ICON_USER}
          navigation={props.navigation}
          name={'MPS'}
        />
        <Custom_IconButton
          icon={ICON_CLOCK}
          navigation={props.navigation}
          name={'HIS'}
        />
      </View>
    </SafeAreaView>
  );
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  customDrawer() {
    return (
      <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
        <Text>hello</Text>
      </DrawerContentScrollView>
    );
  }

  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {width: scale(259)},
          swipeEdgeWidth: scale(50),
        }}
        drawerContent={this.customDrawer}>
        <Drawer.Screen
          name="Home"
          component={MainHomeScreen}
          // options={{navigation: this.props.navigation}}
        />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.Concreate,
  },
  menuContainer: {
    width: scale(31),
    height: scale(31),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CUSTOM_COLORS.Concreate,
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: 2,
    left: scale(54.6),
    top: scale(74),
  },
  menuIcon: {
    width: '100%',
    height: '100%',
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
    color: CUSTOM_COLORS.Black,
    fontFamily: FONT_FAMILY.SFBold,
    fontSize: scale(34),
    position: 'absolute',
    top: scale(-10),
  },
  searchInput: {
    opacity: 0.5,
    color: CUSTOM_COLORS.Black,
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
    color: CUSTOM_COLORS.Vermilion,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: scale(50),
  },

  // {drawer}
  drawerContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },
});
