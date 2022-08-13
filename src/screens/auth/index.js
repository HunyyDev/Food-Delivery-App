import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import {IMG_Logo} from '../../assets/images';
import LargeButton from '../../components/LargeButton';
import UnderlinedInput from '../../components/UnderlinedInput';
import UnderlineButton from '../../components/UnderlineButton';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {or} from 'react-native-reanimated';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import COLORS from '../../constants/colors';

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken, null);
  return auth().signInWithCredential(googleCredential);
}
function onSignOut() {
  return auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'login',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }
  createButtonAlert = () =>
    Alert.alert('Forgot password', 'Ngu!!!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  AlertFailed = () =>
    Alert.alert('Login Failed', 'Username or Password is not correct', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
      },
    ]);
  AlertSignUpFailed = () =>
    Alert.alert(
      'Sign-up Failed',
      'Please check the information again\nNot included: null\nPassword and Confirm password must be the same',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
        },
      ],
    );

  Login = async () => {
    await AsyncStorage.setItem('SIGN_OUT', '0');
    const isSignOut = await AsyncStorage.getItem('SIGN_OUT');
    // console.log('isSignOut', isSignOut);
    this.props.navigation.navigate('Home');
  };

  onLogin = async () => {
    const name = this.state.username;
    const pass = this.state.password;
    const confirm = this.state.confirmPassword;
    // await AsyncStorage.setItem('USER_INFO', JSON.stringify({name, pass}));
    const username = await AsyncStorage.getItem('USERNAME');
    const password = await AsyncStorage.getItem('PASSWORD');
    name === username && pass === password && name != '' && pass != ''
      ? this.Login()
      : this.AlertFailed();
  };
  onSignUp = async () => {
    const name = this.state.username;
    const pass = this.state.password;
    const confirm = this.state.confirmPassword;
    await AsyncStorage.setItem('USERNAME', name);
    await AsyncStorage.setItem('PASSWORD', pass);
    name != '' && pass != '' && confirm === pass
      ? this.Login()
      : this.AlertSignUpFailed();
  };
  getData = async () => {
    const userInfo = await AsyncStorage.getItem('USER_INFO');
    const parsedUserInfo = JSON.parse(userInfo);
    console.log('userInfo', parsedUserInfo);
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          <View style={styles.logoBackground}>
            <Image
              style={styles.logo}
              source={IMG_Logo}
              resizeMode={'contain'}
            />
            <View style={styles.navigationBar}>
              <UnderlineButton
                onPress={() => this.setState({tab: 'login'})}
                isChoosing={this.state.tab === 'login'}>
                Login
              </UnderlineButton>
              <UnderlineButton
                onPress={() => this.setState({tab: 'signup'})}
                isChoosing={this.state.tab === 'signup'}>
                Sign-up
              </UnderlineButton>
            </View>
          </View>
        </>
        {this.state.tab === 'login' ? (
          <>
            <View style={styles.SignInContainer}>
              <Text style={styles.Text}>Email address</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => {
                  this.setState({username: text});
                }}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.SignInContainer}>
              <Text style={styles.Text}>Password</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => {
                  this.setState({password: text});
                }}
                secureTextEntry={true}
              />
            </View>

            <Pressable
              onPress={this.createButtonAlert}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.forgotBackground,
              ]}>
              {({pressed}) =>
                pressed ? (
                  <Text style={styles.forgotPressed}>Forgot passcode?</Text>
                ) : (
                  <Text style={styles.forgot}>Forgot passcode?</Text>
                )
              }
            </Pressable>
            <Button
              title="Google Sign-In"
              onPress={() =>
                onGoogleButtonPress().then(() => {
                  console.log('Signed in with Google!');
                  this.Login();
                })
              }
            />

            <>
              <Pressable
                onPress={this.onLogin}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  },
                  styles.buttonBackground,
                ]}>
                {({pressed}) =>
                  pressed ? (
                    <View style={styles.buttonWhite}>
                      <Text style={styles.TextButtonWhite}>Login</Text>
                    </View>
                  ) : (
                    <View style={styles.buttonOrange}>
                      <Text style={styles.TextButtonOrange}>Login</Text>
                    </View>
                  )
                }
              </Pressable>
            </>
          </>
        ) : (
          <>
            <View style={styles.SignInContainer}>
              <Text style={styles.Text}>Email address</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => {
                  this.setState({username: text});
                }}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.SignInContainer}>
              <Text style={styles.Text}>Password</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => {
                  this.setState({password: text});
                }}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SignInContainer}>
              <Text style={styles.Text}>Confirm Password</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => {
                  this.setState({confirmPassword: text});
                }}
                secureTextEntry={true}
              />
            </View>
            <>
              <Pressable
                onPress={this.onSignUp}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  },
                  styles.buttonBackground,
                ]}>
                {({pressed}) =>
                  pressed ? (
                    <View style={styles.buttonWhite}>
                      <Text style={styles.TextButtonWhite}>Sign-up</Text>
                    </View>
                  ) : (
                    <View style={styles.buttonOrange}>
                      <Text style={styles.TextButtonOrange}>Sign-up</Text>
                    </View>
                  )
                }
              </Pressable>
            </>
          </>
        )}
      </ScrollView>
    );
  }
}
