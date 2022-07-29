import {Text, View, ScrollView, Image, Pressable, Alert} from 'react-native';
import React, {Component} from 'react';
import {IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import UnderlineButton from '../../components/UnderlineButton';
import styles from './styles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'login',
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
            <CustomInput label={'Email address'} secure={false} />
            <CustomInput label={'Password'} secure={true} />

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
            <>
              <CustomButton
                label={'secondary'}
                text={'Login'}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </>
          </>
        ) : (
          <>
            <CustomInput label={'Email address'} secure={false} />
            <CustomInput label={'Password'} secure={true} />
            <CustomInput label={'Confirm Password'} secure={true} />
            <>
              <CustomButton
                label={'secondary'}
                text={'Sign up'}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </>
          </>
        )}
      </ScrollView>
    );
  }
}
<<<<<<< HEAD

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '200',
    width: '200',
  },
});
=======
>>>>>>> ChimCanhCut/dev_khangnt
