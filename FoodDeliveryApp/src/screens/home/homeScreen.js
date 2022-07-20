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
export class HomeScreen extends Component {
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
              <Text>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Snack</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Sauce</Text>
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
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  sectionHeading: {
    flex: 3,
    backgroundColor: CUSTOM_COLOR.Silver,
    marginVertical: 30,
  },
  sectionIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 10,
  },
  menuHeading: {},
  cartHeading: {},

  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: 34,
    marginHorizontal: 30,
    marginTop: 20,
  },

  sectionSearch: {
    marginTop: 20,
  },

  textSearch: {
    borderRadius: 20,
    marginHorizontal: 35,
    padding: 5,
    backgroundColor: CUSTOM_COLOR.Gallery,
  },

  sectionMain: {
    flex: 5,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  headingMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sectionButton: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
