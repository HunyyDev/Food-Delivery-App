import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {ICON_33, ICON_Menu, ICON_shop} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import ButtonHome from '../../components/ButtonHome';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'Foods',
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          <View style={styles.MenuContainer}>
            <Image source={ICON_Menu} style={styles.IconMenu} />
            <Image source={ICON_shop} style={styles.IconShop} />
          </View>
        </>
        <>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>Delicious{'\n'}food for you</Text>
          </View>
        </>
        <>
          <View style={styles.SearchContainer}>
            <View style={styles.Search}>
              <Image source={ICON_33} style={styles.IconSearch} />
              {/* <Text style={styles.TextSearch}>Search</Text> */}
              <TextInput
                style={styles.TextSearch}
                placeholder={'Search'}
                placeholderTextColor={CUSTOM_COLOR.Light_Black}
              />
            </View>
          </View>
        </>
        <>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.navigationBar, styles.TitleContainer]}>
              <ButtonHome
                onPress={() => this.setState({tab: 'Foods'})}
                isChoosing={this.state.tab === 'Foods'}>
                Foods
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Drinks'})}
                isChoosing={this.state.tab === 'Drinks'}>
                Drinks
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Snacks'})}
                isChoosing={this.state.tab === 'Snacks'}>
                Snacks
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Sauce'})}
                isChoosing={this.state.tab === 'Sauce'}>
                Sauce
              </ButtonHome>
            </View>
          </ScrollView>
        </>
        <>
          <View style={styles.ImageContainer} />
        </>
        <>
          <View style={styles.HomeContainer} />
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
    flexDirection: 'column',
  },
  MenuContainer: {
    height: Dimensions.get('window').height * 0.1,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    flexDirection: 'column',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  TextContainer: {
    height: Dimensions.get('window').height * 0.22,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    padding: 30,
    paddingLeft: 50,
  },
  SearchContainer: {
    height: Dimensions.get('window').height * 0.08,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleContainer: {
    padding: 10,
    marginTop: 36,
    paddingHorizontal: 75,
    backgroundColor: CUSTOM_COLOR.Concrete,
    flex: 1,
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    gap: 41,
  },
  ImageContainer: {
    height: Dimensions.get('window').height * 0.5,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Black,
  },
  HomeContainer: {
    height: Dimensions.get('window').height * 0.15,
    width: '100%',
    backgroundColor: 'red',
  },
  IconMenu: {
    marginLeft: 50,
  },
  IconShop: {
    position: 'absolute',
    left: 350,
    alignSelf: 'flex-end',
  },
  Text: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.RoundedHeavy,
    fontSize: 34,
  },
  Search: {
    width: '100%',
    height: '100%',
    backgroundColor: CUSTOM_COLOR.Gallery,
    flexDirection: 'row',
    borderRadius: 40,
    alignItems: 'center',
    // padding: 21,
    // paddingLeft: 35,
  },
  IconSearch: {
    margin: 21,
    marginLeft: 35,
  },
  TextSearch: {
    // margin: 18,
    // marginLeft: -5,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    // fontFamily: FONT_FAMILY.RoundedBold,
    fontSize: 17,
  },
});
