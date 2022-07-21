import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constant/color';
import {IMG_Logo} from '../../assets/images';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import CustomLogin_SignUp from '../../Components/CustomLogin_SignUp';
import CustomFW from '../../Components/CustomFW';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LonginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'login',
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          {/* Top */}
          <View style={styles.containerTop}>
            <Image source={IMG_Logo} style={styles.image} />
            <View style={styles.bar}>
              <CustomLogin_SignUp
                onPress={() => this.setState({tab: 'login'})}
                isChoosing={this.state.tab === 'login'}
                label="Login"></CustomLogin_SignUp>
              <CustomLogin_SignUp
                onPress={() => this.setState({tab: 'signup'})}
                isChoosing={this.state.tab === 'signup'}
                label="Sign-up"></CustomLogin_SignUp>
            </View>
          </View>
          {/* Mid */}
          <View style={styles.containerMid}>
            <CustomInput title="Email Address" seruce={false}></CustomInput>
            <CustomInput title="Password" secure={true}></CustomInput>
            {this.state.tab === 'login' ? (
              <>
                <CustomFW label={'Forgot password'}></CustomFW>
              </>
            ) : (
              <>
                <CustomInput
                  title="Confirm Password"
                  secure={true}></CustomInput>
              </>
            )}
          </View>
          {/* Bot */}
          <View style={styles.containerBot}>
            <CustomButton
              label="Login"
              navigation={this.props.navigation}></CustomButton>
          </View>
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    width: windowWidth,
    height: windowHeight * 0.35,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  containerMid: {
    width: windowWidth,
    height: windowHeight * 0.45,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  containerBot: {
    width: windowWidth,
    height: windowHeight * 0.2,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
});
