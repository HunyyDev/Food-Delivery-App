import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import ListButton from '../../components/ListButton';
import scale from '../../constants/responsive';
import CustomDish from '../../components/CustomDish';

import {
  IMG_Menu,
  IMG_Search,
  IMG_Shopping_cart,
  IMG_Heart,
  IMG_Home,
  IMG_History,
  IMG_User,
  IMG_dish1,
  IMG_dish2,
} from '../../assets/images/images';
import FONT_FAMILY from '../../constants/fonts';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classify: 'Foods',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Heading */}
        <>
          {/* Tab bar */}
          <>
            <View style={styles.TabBar}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.Menu} source={IMG_Menu} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image
                  style={styles.ShoppingCart}
                  source={IMG_Shopping_cart}></Image>
              </TouchableOpacity>
            </View>
          </>
        </>
        <ScrollView style={styles.option} showsVerticalScrollIndicator={false}>
          <>
            {/* Content */}
            <>
              <View style={styles.containerText}>
                <Text style={styles.Content}>Delicious food for you</Text>
              </View>
            </>

            {/* Search */}
            <>
              <View style={styles.Search}>
                <Image style={styles.SearchLogo} source={IMG_Search}></Image>
                <TextInput
                  style={styles.SearchText}
                  placeholder={'Search'}></TextInput>
              </View>
            </>
          </>
          {/* Boding */}
          <>
            <ListButton
              style={styles.ListButton}
              values={['Foods', 'Drinks', 'Snacks', 'Sauce']}
              selectedValue={this.state.classify}
              setSelectedValue={value => {
                this.setState({classify: value});
              }}
            />

            <TouchableOpacity style={styles.seemoreContainer}>
              <Text style={styles.seemoreButton}>see more</Text>
            </TouchableOpacity>

            <ScrollView
              style={styles.MenuScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: scale.scaleWidth(5),
                paddingHorizontal: scale.scaleWidth(15),
              }}>
              <CustomDish
                source={IMG_dish2}
                name={'Veggie\ntomato mix'}
                cost="N1,900"
              />
              <CustomDish
                source={IMG_dish1}
                name={'Veggie\ntomato mix'}
                cost="N1,900"
              />
              <CustomDish
                source={IMG_dish2}
                name={'Spicy fish\nsauce'}
                cost="N2,300.99"
              />
            </ScrollView>
          </>
        </ScrollView>
        {/* Bottom */}
        <>
          <View style={styles.BottomContainer}>
            <View style={styles.BottomContainer}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMG_Home}></Image>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMG_Heart}></Image>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMG_User}></Image>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMG_History}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  TabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: scale.scaleWidth(64),
    marginBottom: scale.scaleWidth(30),
  },
  Menu: {
    marginLeft: scale.scaleWidth(54.6),
  },
  ShoppingCart: {
    marginRight: scale.scaleWidth(41),
  },
  containerText: {
    width: 190,
    height: 82,
    marginLeft: scale.scaleWidth(50),
    marginTop: scale.scaleWidth(19.33),
  },
  Content: {
    fontSize: 34,
    lineHeight: 40.57,
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Black,
  },
  Search: {
    borderRadius: scale.scaleWidth(30),
    marginTop: scale.scaleWidth(26),
    width: scale.scaleWidth(314),
    height: scale.scaleWidth(60),
    backgroundColor: CUSTOM_COLOR.Gallery,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SearchLogo: {
    marginLeft: scale.scaleWidth(35),
  },
  SearchText: {
    marginLeft: scale.scaleWidth(16),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Black,
  },
  BottomContainer: {
    height: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  seemoreButton: {
    fontFamily: FONT_FAMILY.Regular,
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale.scaleWidth(15),
  },
  seemoreContainer: {
    alignItems: 'flex-end',
    marginRight: scale.scaleWidth(41),
    marginTop: scale.scaleWidth(43),
  },
  MenuScroll: {
    height: 355,
    maxHeight: scale.scaleWidth(355),
    marginTop: scale.scaleWidth(1),
  },
  ListButton: {
    height: scale.scaleWidth(46),
    maxHeight: scale.scaleWidth(46),
    marginTop: scale.scaleWidth(32),
  },
});
