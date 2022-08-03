import {
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import styles from './styles';
import isValidEmail from './isValidEmail';
import CustomInput from '../../components/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage'
import useKeyboard from '../../Hooks/useKeyboard';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../routes/RootNavigator';
import scale from '../../constants/responsive';
import { LoginContext } from './index';


const SignInScreen = props => {
    const {email, password, setEmail, setPassword} = useContext(LoginContext);

    return (
        <>
            <CustomInput type='email' title='Email address'
                placeholder='Email' value={email} setValue={setEmail} />
            <CustomInput type='secure' title='Password'
                placeholder='Password'
                value={password} setValue={setPassword} />

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot passcode?</Text>
            </TouchableOpacity>
        </>
    )
}

export default SignInScreen