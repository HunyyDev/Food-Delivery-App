import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constant/color';
import FONT_FAMILY from '../../constant/font';
import {
  ICO_Bar,
  ICO_Cart,
  ICO_Body,
  ICO_Heart,
  ICO_Timer,
  ICO_Visor,
  ICO_House,
  ICO_Head,
  ICO_User,
} from '../../assets/icons/index.js';
import CustomLogin_SignUp from '../../Components/CustomLogin_SignUp';
import {IMG_Food_1, IMG_Logo} from '../../assets/images';
import CustomMenubar from '../../Components/CustomMenubar';
import CustomHomeMenu from '../../Components/CustomHomeMenu';
import CustomList from '../../Components/CustomList';
import CustomButtonTop from '../../Components/CustomButtonTop';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {tab: 'Foods'};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          {/* Top */}
          <View style={styles.containerTop}>
            <Image source={ICO_Bar} style={styles.bar} />
            {/* <Image source={ICO_Cart} style={styles.cart} /> */}
            <CustomButtonTop
              src={ICO_Cart}
              navigation={this.props.navigation}
              destination={'Oder'}
            />
            <Text style={styles.text}>{`Delicious \nfood for you`}</Text>

            <View style={styles.search}>
              <Image source={ICO_Visor} style={styles.visor} />
              <View style={styles.textInput}>
                <TextInput></TextInput>
              </View>
            </View>

            <ScrollView
              style={styles.bottomBar}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomMenubar
                  onPress={() => this.setState({tab: 'Foods'})}
                  isChoosing={this.state.tab === 'Foods'}
                  label="Foods"
                />
                <CustomMenubar
                  onPress={() => this.setState({tab: 'Drinks'})}
                  isChoosing={this.state.tab === 'Drinks'}
                  label="Drinks"
                />
                <CustomMenubar
                  onPress={() => this.setState({tab: 'Snacks'})}
                  isChoosing={this.state.tab === 'Snacks'}
                  label="Snacks"
                />
                <CustomMenubar
                  onPress={() => this.setState({tab: 'Sauce'})}
                  isChoosing={this.state.tab === 'Sauce'}
                  label="Sauce"
                />
              </View>
            </ScrollView>
            {/* Bot */}
          </View>
          <View style={styles.containerBot}>
            <ScrollView
              style={styles.menuBar}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 50,
                  alignItems: 'center',
                  padding: 50,
                  justifyContent: 'center',
                }}>
                <CustomList
                  src={IMG_Food_1}
                  name={`    Veggie \ntomato mix`}
                  cost={'N1,900'}
                  navigation={this.props.navigation}
                />
                <CustomList
                  src={IMG_Food_1}
                  name={`    Veggie \ntomato mix`}
                  cost={'N1,900'}
                  navigation={this.props.navigation}
                />
                <CustomList
                  src={IMG_Food_1}
                  name={`    Veggie \ntomato mix`}
                  cost={'N1,900'}
                  navigation={this.props.navigation}
                />
              </View>
            </ScrollView>
            <View style={styles.bottomBar2}>
              <CustomHomeMenu
                src={ICO_House}
                isChoosing={true}
                label={'House'}
                navigation={this.props.navigation}
              />
              <CustomHomeMenu
                src={ICO_Heart}
                isChoosing={true}
                label={'Heart'}
                navigation={this.props.navigation}
              />
              <CustomHomeMenu
                src={ICO_User}
                isChoosing={true}
                label={'User'}
                navigation={this.props.navigation}
              />
              <CustomHomeMenu
                src={ICO_Timer}
                isChoosing={true}
                label={'Timer'}
                navigation={this.props.navigation}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    width: windowWidth,
    height: windowHeight * 0.5,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  containerBot: {
    width: windowWidth,
    height: windowHeight * 0.6,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  text: {
    fontFamily: FONT_FAMILY.Bold_Sf,
    marginLeft: 50,
    marginTop: 50,
    fontSize: 40,
    color: CUSTOM_COLOR.Black,
  },
  bar: {
    marginLeft: 50,
    marginTop: 30,
  },
  cart: {
    marginLeft: 300,
    marginTop: -25,
    width: 30,
    height: 25,
  },
  search: {
    width: 314,
    height: 60,
    borderRadius: 25,
    borderColor: CUSTOM_COLOR.Black,
    borderWidth: 2,
    backgroundColor: CUSTOM_COLOR.Gallery,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  visor: {
    position: 'absolute',
    marginLeft: 20,
    width: 22,
    height: 20,
  },
  textInput: {
    width: 264,
    height: 60,
    // borderRadius: 25,
    // borderColor: CUSTOM_COLOR.Black,
    // borderWidth: 2,
    backgroundColor: CUSTOM_COLOR.Gallery,
    marginLeft: 50,
    justifyContent: 'center',
  },
  bottomBar: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height * 0.06,
    bottom: 0,
    // borderColor: CUSTOM_COLOR.Black,
    // borderWidth: 3,
  },
  viewBar: {height: '100%', width: 200, backgroundColor: CUSTOM_COLOR.Black},
  textBar: {
    width: 80,
    height: '100%',
    marginTop: 7,
    marginLeft: 30,
    fontSize: 20,
  },
  menuBar: {
    marginLeft: 20,
    width: Dimensions.get('window').width,

    // height: Dimensions.get('window').height * 0.05,
    // borderColor: CUSTOM_COLOR.White,
    // borderWidth: 3,
  },
  menu: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: 20,
    borderRadius: 20,
  },
  food: {
    width: 120,
    height: 120,
    top: -50,
    alignSelf: 'center',
    borderRadius: 100,
  },
  textMenu: {
    fontFamily: FONT_FAMILY.Bold_Sf,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: -45,
  },
  textMenu2: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold_Sf,
    marginTop: 30,
  },
  bottomBar2: {
    width: '100%',
    height: 60,
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
