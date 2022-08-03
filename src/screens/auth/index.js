import {
    View,
    SafeAreaView,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import React, { useState, createContext, useContext } from 'react';

import { IMG_logo } from '../../assets/images/images';
import SwitchButton from '../../components/SwitchButton';
import styles from './styles';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import CustomButton from '../../components/CustomButton';
import useKeyboard from '../../Hooks/useKeyboard';
import { AuthContext } from '../../routes/RootNavigator';
import isValidEmail from './isValidEmail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import scale from '../../constants/responsive';

export const LoginContext = createContext();

const LoginScreen = props => {
    const [status, setStatus] = useState('Login');
    const keyboardisShown = useKeyboard();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const { signIn, loading } = useContext(AuthContext);

    const loginContext = {
        email: email,
        password: password,
        confirmPass: confirmPass,
        setEmail: (mail) => setEmail(mail),
        setPassword: (pass) => setPassword(pass),
        setConfirmPass: (cfPass) => setConfirmPass(cfPass),
    }

    const onLogin = async () => {
        if (isValidEmail(email) && password.length != 0 && (status === 'Sign-up' ? confirmPass === password : 1)) {
            await AsyncStorage.setItem('LoggedIn', 'loading');
            await AsyncStorage.setItem('Email', email);
            // signIn();
            loading();
        }
        else
            Alert.alert('Try again!', 'Something is wrong.');
    }

    return (
        <SafeAreaView style={styles.container} pointerEvents={props.pointerEvents}>
            <View style={styles.header}>
                <Image source={IMG_logo} style={styles.logoContainer} resizeMode='contain' />
                <SwitchButton
                    values={['Login', 'Sign-up']}
                    selectedValue={status}
                    setSelectedValue={setStatus} />
            </View>
            <View style={{ flex: 4 }}>
                <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                    <LoginContext.Provider value={loginContext}>
                        {status === 'Login' ?
                            <SignInScreen navigation={props.navigation} /> : <SignUpScreen navigation={props.navigation} />
                        }
                    </LoginContext.Provider>
                    <View style={{ height: scale.scaleHeight(80) }} />
                </ScrollView>
            </View>
            {keyboardisShown === 0 ?
                <CustomButton
                    style={styles.button}
                    content={'Login'}
                    type='secondary'
                    onPress={() => onLogin()} /> : null}
        </SafeAreaView>
    );
}



export default LoginScreen;