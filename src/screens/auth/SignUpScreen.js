import {
    Alert, SafeAreaView,
} from 'react-native';
import React, { useState, useContext } from 'react';
import styles from './styles';
import isValidEmail from './isValidEmail';
import CustomInput from '../../components/CustomInput'
import useKeyboard from '../../Hooks/useKeyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../routes/RootNavigator';
import { LoginContext } from './index';


const SignUpScreen = props => {
    const {email, password, confirmPass, setEmail, setPassword, setConfirmPass} = useContext(LoginContext);
    // const keyboardisShown = useKeyboard();
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomInput type='email' title='Email address'
                placeholder='Email' value={email} setValue={setEmail} />
            <CustomInput type='secure' title='Password'
                placeholder='Password' value={password} setValue={setPassword} />
            <CustomInput type='secure' title='Confirm'
                placeholder='Confirm password'
                value={confirmPass}
                setValue={setConfirmPass} />
        </SafeAreaView>
    )
}

export default SignUpScreen