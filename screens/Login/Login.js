/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMG_Logo} from '../../src/assets/images';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
const Login = 'Login';
const signUp = 'Sign-up';
const SignIn = ({navigation}) => {
  const [page, setPage] = useState(Login);
  // const {navigation} = this.props;
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <>
        <View style={styles.navContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={IMG_Logo} />
          </View>
          <View style={styles.text}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                setPage(Login);
              }}
              disabled={page === Login ? true : false}>
              <Text style={styles.textLogin}>Login</Text>
              {page === Login ? <View style={styles.rightLine} /> : null}
              {page === Login ? (
                <View style={styles.inputLogin}>
                  <CustomInput style={styles.input} label = "Email address" />
                  <CustomInput label="Password" secureTextEntry={true} />
                </View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                setPage(signUp);
              }}
              disabled={page === signUp ? true : false}>
              <Text style={styles.textSignUp}>Sign-up</Text>
              {page === signUp ? <View style={styles.leftLine} /> : null}
              {page === signUp ? (
                <View style={styles.inputSignUp}>
                  <CustomInput label = "Email address" />
                  <CustomInput label = "Password" secureTextEntry = {true} />
                  <CustomInput label = "Confirm Password" secureTextEntry = {true} />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </>
      <>
        <View style={styles.button}>
          <CustomButton onPress={() => navigation.navigate('Home')} title = "Login" type = "Secondary" />
        </View>
      </>
    </SafeAreaView>
  );
};

export default SignIn;
