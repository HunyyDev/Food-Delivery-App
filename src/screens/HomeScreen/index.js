import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/reponsive';
import {UnderlineButton} from '../../assets/components/UnderlineButton';
import {CustomSwitch} from '../../assets/components/CustomSwitch';
import {
  IMG_Vector,
  IMG_Cart,
  IMG_Search,
  IMG_Home,
  IMG_Heart,
  IMG_User,
  IMG_Clock,
} from '../../assets/images';
import {Drinks} from './DrinksForm';
import {Foods} from './FoodsForm';
import {Snacks} from './SnacksForm';
import {Sauce} from './SauceForm';
class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // render() {
  //   return this.props.label === 'Foods' ? (
  //     <Foods {...this.props.props} />
  //   ) : (
  //     <Drinks {...this.props.props} />
  //   );
  // }
  checkSwitch = props => {
    switch (props.label) {
      case 'Foods':
        this.FOODS();
        break;

      case 'Drinks':
        this.DRINKS();
        break;

      case 'Snacks':
        this.SNACKS();
        break;

      case 'Sauce':
        this.SAUCE();
        break;
    }
  };
  FOODS = props => {
    props.label === 'Foods';
  };
  DRINKS = props => {
    props.label === 'Drinks';
  };
  SNACKS = props => {
    props.label === 'Snacks';
  };
  SAUCE = props => {
    props.label === 'Sauce';
  };
  render() {
    if (this.props.label === 'Foods') {
      return <Foods />;
    } else {
      if (this.props.label === 'Drinks') {
        return <Drinks />;
      } else {
        if (this.props.label === 'Snacks') {
          return <Snacks />;
        } else {
          return <Sauce />;
        }
      }
    }
  }
}
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Foods',
    };
  }

  render() {
    return (
      <SafeAreaView
        style={styles.backgroundContainer}
        onPressHandle={() => {
          this.getData();
        }}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={IMG_Vector} style={styles.Menu} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartContainer}>
          <Image source={IMG_Cart} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>
        <View style={styles.searchContainer}>
          <Image source={IMG_Search} style={styles.searchImage} />
          <TextInput
            hitSlop={{top: '100%', left: '100%', right: '100%', bottom: '100%'}}
            placeholder={'Search'}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.scrollView}>
          <CustomSwitch
            flexGrow={1}
            justifyContent={'center'}
            flexDirection={'row'}>
            <View style={styles.backgroundItem}>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Foods'})}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === this.props.label
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.Concrete,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Foods</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Drinks'})}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === this.props.label
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.Concrete,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Drinks</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Snacks'})}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === this.props.label
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.Concrete,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Snacks</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Sauce'})}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === this.props.label
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.Concrete,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Sauce</Text>
                </UnderlineButton>
              </View>
            </View>
          </CustomSwitch>
        </View>
        <View style={styles.viewTaskbar}>
          <Image style={styles.iconContainer} source={IMG_Home} />
          <Image style={styles.iconContainer} source={IMG_Heart} />
          <Image style={styles.iconContainer} source={IMG_User} />
          <Image style={styles.iconContainer} source={IMG_Clock} />
        </View>
        <Condition label={this.state.label} props={this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: scale(28),
    height: scale(20),
    top: scale(74),
    left: scale(54.6),
    position: 'absolute',
  },
  Menu: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  cartContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(66),
    right: scale(42),
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(34),
  },
  titleContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(132),
    left: scale(50),
    position: 'absolute',
    justifyContent: 'space-around',
  },
  backgroundTitle: {
    width: '20%',
    height: 'auto',
    // backgroundColor: 'black',
  },
  searchContainer: {
    width: scale(380),
    height: scale(60),
    top: scale(242),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchImage: {
    left: scale(50),
    alignSelf: 'center',
  },
  searchInput: {
    left: scale(90),
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(17),
    alignSelf: 'center',
    width: scale(300),
    position: 'absolute',
  },
  scrollView: {
    width: scale(450),
    height: scale(50),
    top: scale(400),
    // backgroundColor: CUSTOM_COLOR.SunsetOrange,
    position: 'absolute',
  },
  backgroundItem: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CUSTOM_COLOR.Concrete,
    position: 'absolute',
  },
  text1: {
    left: scale(50),
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.SFBlack,
    color: CUSTOM_COLOR.Vermilion,
    marginRight: scale(91),
  },
  viewTaskbar: {
    // width: scale(25),
    height: scale(25),
    width: '90%',
    bottom: scale(50.1),
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
  },
  iconContainer: {
    height: scale(25),
    width: '7%',
    alignSelf: 'center',
    bottom: scale(0),
  },
  underLine: {
    width: scale(134),
    height: scale(4),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  button: {
    height: '70%',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
