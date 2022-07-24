import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMG_Veggie_tomato_mix} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import CustomIcon from '../../components/CustomIcon';
import React, {Component} from 'react';
import scale from '../../constants/responsive';
import {Searchbar} from 'react-native-paper';
import {IC_HomeRaw, IC_SearchRaw} from '../../assets/icons';
import CustomList from '../../components/HomeScreen/CustomList';
import CustomCategory from '../../components/HomeScreen/CustomCategory';
import SCREEN from '../../constants/screens';
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
        <View style={styles.headerSection}>
          <View style={styles.iconHeaderSection}>
            <TouchableOpacity>
              <CustomIcon type="menu" fill="#000000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomIcon type="cart" fill="#000000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>

          <Searchbar
            placeholder="Search"
            icon={IC_SearchRaw}
            style={styles.searchBar}
          />
        </View>

        <View style={styles.mainSection}>
          <View style={styles.customCategory}>
            <ScrollView horizontal={true}>
              <CustomCategory
                onPress={() => this.setOnPress(SCREEN.FOODS, true)}
                name={'Foods'}
                style={styles.textHeadingMain}
              />

              <CustomCategory
                onPress={() => {
                  this.setOnPress(SCREEN.DRINKS, true);
                }}
                name={'Drinks'}
                style={styles.textHeadingMain}
              />

              <CustomCategory
                onPress={() => this.setOnPress(SCREEN.SNACKS, true)}
                name={'Snacks'}
                style={styles.textHeadingMain}
              />

              <CustomCategory
                onPress={() => this.setOnPress(SCREEN.SAUCES, true)}
                name={'Sauces'}
                style={styles.textHeadingMain}
              />
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.seeMore}>
            <Text
              style={{
                color: CUSTOM_COLOR.Orange,
                marginBottom: scale(20),
                textAlign: 'right',
                fontSize: scale(15),
                fontFamily: FONT_FAMILY.Medium,
              }}>
              {'see more'}
            </Text>
          </TouchableOpacity>
          <ScrollView
            style={styles.scrollMenu}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <CustomList
              source={IMG_Veggie_tomato_mix}
              name={'Veggie \ntomato mix'}
              price={'N1,900'}
            />
            <CustomList
              source={IMG_Veggie_tomato_mix}
              name={'Veggie \ntomato mix'}
              price={'N1,900'}
            />
            <CustomList
              source={IMG_Veggie_tomato_mix}
              name={'Veggie \ntomato mix'}
              price={'N1,900'}
            />
          </ScrollView>
        </View>

        <View style={styles.iconSection}>
          <TouchableOpacity>
            <Image source={IC_HomeRaw} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomIcon type="heart" fill="#000000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomIcon type="user" fill="#000000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomIcon type="history" fill="#000000" />
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

  headerSection: {
    flex: 4,
  },

  iconHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: scale(74),
  },

  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(34),
    marginLeft: '10%',
    marginTop: scale(43),
    marginBottom: scale(28),
  },

  searchBar: {
    borderRadius: scale(30),
    backgroundColor: CUSTOM_COLOR.GalleryApprox,
    marginHorizontal: scale(50),
    height: scale(60),
  },

  mainSection: {
    flex: 5,
  },

  customCategory: {
    flexDirection: 'row',
    marginLeft: scale(75),
    justifyContent: 'space-between',
    height: '10%',
  },

  scrollMenu: {},

  iconSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textHeadingMain: {
    fontSize: scale(17),
    opacity: 0.7,
    marginRight: 50,
    fontFamily: FONT_FAMILY.Black,
  },
  seeMore: {
    marginHorizontal: '10%',
  },
});
