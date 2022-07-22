import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextComponent,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import React, {Component} from 'react';
import {
  IC_Menu,
  IC_Search,
  IC_Cart,
  IC_Home,
  IC_Heart,
  IC_History,
  IC_User,
} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import HeadingButton from '../../components/CustomHeadingButton';
import {IMG_Veggie_tomato_mix} from '../../assets/images';
import Icon from 'react-native-vector-icons/';
import CustomList from '../../components/CustomList';
export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Top */}
        <View style={styles.top}>
          {/* Heading */}
          <View style={styles.Heading}>
            <HeadingButton ICsource={IC_Menu} />
            <HeadingButton ICsource={IC_Cart} />
          </View>

          {/* Title */}

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
          </View>

          <Searchbar
            placeholder="Search"
            icon={IC_Search}
            style={{
              borderRadius: scale(30),
              backgroundColor: CUSTOM_COLOR.GalleryApprox,
            }}
          />
        </View>
        {/* Mid */}
        <View style={styles.mid}>
          {/* Menu */}
          <View style={styles.menuContainer}>
            {/* Food Menu */}
            <TouchableOpacity>
              <View style={styles.foodsContainer}>
                <Text style={styles.chosenMessage}>{'Foods'}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.drinksContainer}>
              <Text style={styles.dismissedMessage}>{'Drinks'}</Text>
            </View>
            <View style={styles.snacksContainer}>
              <Text style={styles.dismissedMessage}>{'Snacks'}</Text>
            </View>
            <View style={styles.sauceContainer}>
              <Text style={styles.dismissedMessage}>{'Sauce'}</Text>
            </View>
          </View>
          <View style={styles.scrollMenuTitleContainer}>
            <TouchableOpacity style={styles.scrollMenuTitle}>
              <Text
                style={{color: CUSTOM_COLOR.Orange, marginBottom: scale(20)}}>
                {'see more'}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollMenu} horizontal={true}>
            <CustomList
              IMGSource={IMG_Veggie_tomato_mix}
              Name={'Veggie \ntomato mix'}
              Price={'N1,900'}></CustomList>
            <CustomList
              IMGSource={IMG_Veggie_tomato_mix}
              Name={'Veggie \ntomato mix'}
              Price={'N1,900'}></CustomList>
            <CustomList
              IMGSource={IMG_Veggie_tomato_mix}
              Name={'Veggie \ntomato mix'}
              Price={'N1,900'}></CustomList>
          </ScrollView>
        </View>

        {/* Bot */}
        <View style={styles.bottomMenuContainer}>
          <TouchableOpacity>
            <Image source={IC_Home}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_Heart}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_User}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_History}></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: CUSTOM_COLOR.ConcreteSolid,
  },
  top: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    marginHorizontal: scale(50),
    justifyContent: 'space-around',
  },
  Heading: {
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  titleContainer: {},
  title: {
    fontFamily: FONT_FAMILY.Black,
    fontWeight: '700',
    fontSize: scale(34),
  },

  //   searchBarContainer: {
  //     borderRadius: 45,
  //     backgroundColor: CUSTOM_COLOR.GalleryAprox,
  //     width: '100%',
  //     height: scale(60),
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },

  searchIconContainer: {
    backgroundColor: CUSTOM_COLOR.Silver,
    width: scale(18),
    height: scale(18),
    marginLeft: scale(25),
  },
  searchMessageContainer: {
    width: scale(54),
    height: scale(20),
    marginLeft: scale(20),
  },
  searchMessage: {
    fontFamily: FONT_FAMILY.Black,
    fontWeight: '600',
    fontSize: scale(17),
  },
  mid: {
    flex: 1.75,
    backgroundColor: CUSTOM_COLOR.ConcreteSolid,
    justifyContent: 'space-around',
  },

  menuContainer: {
    backgroundColor: CUSTOM_COLOR.Scarlet,
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(60),
  },

  foodsContainer: {
    width: scale(50),
    height: scale(20),
    marginLeft: scale(20),
    backgroundColor: CUSTOM_COLOR.LasPalmas,
  },
  drinksContainer: {
    width: scale(51),
    height: scale(20),
    marginLeft: scale(40),
    backgroundColor: CUSTOM_COLOR.LasPalmas,
  },
  snacksContainer: {
    width: scale(58),
    height: scale(20),
    marginLeft: scale(40),
    backgroundColor: CUSTOM_COLOR.LasPalmas,
  },
  sauceContainer: {
    width: scale(50),
    height: scale(20),
    marginLeft: scale(40),
    backgroundColor: CUSTOM_COLOR.LasPalmas,
  },
  chosenMessage: {
    fontFamily: FONT_FAMILY.SF_Pro_Rounded_Black,
    fontWeight: '400',
    fontSize: scale(17),
    lineHeight: scale(20.29),
    color: CUSTOM_COLOR.Vermilion,
  },
  dismissedMessage: {
    fontFamily: FONT_FAMILY.SF_Pro_Rounded_Black,
    fontWeight: '400',
    fontSize: scale(17),
    lineHeight: scale(20.29),
    color: CUSTOM_COLOR.Manatee,
  },
  scrollMenuTitleContainer: {alignItems: 'flex-end'},
  scrollMenuTitle: {
    //textAlign: 'right',
    width: scale(100),
  },
  scrollMenu: {},

  optionContainer: {
    width: Dimensions.get('window').width * 0.5,
    height: 170,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    justifyContent: 'center',
    alignItems: 'center',
    //zIndex: 2,
  },
  imageMain: {
    borderRadius: 100,
    //marginTop: scale(0),
    //zIndex: 2,
  },
  optionInfo: {
    //top: 0,
    bottom: 0,
    //height: '30%',
    //width: '50%',
    // backgroundColor: 'yellow',
    borderRadius: 30,
    zIndex: 2,
  },
  decriseContainer: {
    width: Dimensions.get('window').width * 0.5,
    height: 250,
    backgroundColor: CUSTOM_COLOR.Orange,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    borderRadius: 20,
  },
  bot: {
    backgroundColor: CUSTOM_COLOR.Orange,
  },
  bottomMenuContainer: {
    flex: 0.2,
    // backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
