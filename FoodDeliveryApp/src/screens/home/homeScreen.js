import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import React, {Component} from 'react';
import {
  IC_Cart,
  IC_Menu,
  IC_Search,
  IC_Heart,
  IC_Home,
  IC_History,
  IC_User,
} from '../../assets/icons';
import {Searchbar} from 'react-native-paper';
import scale from '../../constants/responsive';
const FOODS = 'FOODS';
// const DRINKS = 'DRINKS';
// const SNACK = 'SNACK';
// const SAUCE = 'SAUCE';
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: FOODS,
    };
  }

  setPage = newPage => {
    this.setPage({page: newPage});
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* sectionHeading */}
        <View style={styles.sectionHeading}>
          {/* sectionIcon */}
          <View style={styles.sectionIcon}>
            <TouchableOpacity>
              <Image source={IC_Menu} style={styles.menuHeading} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IC_Cart} style={styles.cartHeading} />
            </TouchableOpacity>
          </View>
          {/* title */}
          <View>
            <Text style={styles.title}>{'Delicous \nfood for you'}</Text>
          </View>

          {/* sectionSearch */}
          <View style={styles.sectionSearch}>
            <Searchbar
              icon={IC_Search}
              placeholder="Search"
              style={styles.textSearch}
            />
          </View>
        </View>
        {/* sectionMain */}
        <View style={styles.sectionMain}>
          <View style={styles.headingMain}>
            <TouchableOpacity>
              <Text style={styles.textHeadingMain}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textHeadingMain}>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textHeadingMain}>Snack</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textHeadingMain}>Sauce</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sectionButton */}
        <View style={styles.sectionButton}>
          <TouchableOpacity>
            <Image source={IC_Home} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={IC_Heart} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={IC_User} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={IC_History} />
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
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },

  sectionHeading: {
    flex: 4,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    marginVertical: 30,
    marginLeft: scale(54.6),
    marginRight: scale(41),
  },
  sectionIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuHeading: {
    flex: 1,
  },
  cartHeading: {},

  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(34),
    marginTop: 20,
  },

  sectionSearch: {
    marginTop: 20,
  },

  textSearch: {
    borderRadius: 20,
    padding: 5,
  },

  sectionMain: {
    flex: 6,
    backgroundColor: 'red',
  },

  headingMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'yellow',
  },

  textHeadingMain: {
    fontSize: scale(17),
    opacity: 0.7,
  },

  // colorText: {
  //   color: CUSTOM_COLOR.SunsetOrange,
  // },

  lineAndText: {
    borderBottomWidth: 2,
    borderBottomColor: CUSTOM_COLOR.SunsetOrange,
  },
  sectionButton: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 0,
    alignItems: 'center',
  },
});
