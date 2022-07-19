import React, {useMemo, useState} from 'react';

import {Image, ScrollView, Text, View} from 'react-native';

import {HERO_IMAGE} from '../../assets/images';
import LargeButton from '../../components/LargeButton';
import UnderlineButton from '../../components/UnderlineButton';
import UnderlineTextInput from '../../components/UnderlineTextInput';

import LINKS from '../../constants/links';

import styles from './styles';

function AuthenticationScreen(props) {
  const {navigation} = props;

  const TAB_NAME = useMemo(
    () => ({
      LOGIN: 'login',
      SIGNUP: 'signup',
    }),
    [],
  );

  const [tab, setTab] = useState('login');

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.heroImageWrapper}>
          <Image style={styles.heroImage} source={HERO_IMAGE} />
        </View>
        <View style={styles.navigationBar}>
          <UnderlineButton
            style={styles.underlineButton}
            onPress={() => setTab(TAB_NAME.LOGIN)}
            isChoosing={tab === TAB_NAME.LOGIN}>
            Login
          </UnderlineButton>
          <UnderlineButton
            style={styles.underlineButton}
            onPress={() => setTab(TAB_NAME.SIGNUP)}
            isChoosing={tab === TAB_NAME.SIGNUP}>
            Sign-up
          </UnderlineButton>
        </View>
      </View>
      <ScrollView>
        <View style={styles.formWrapper}>
          <View style={styles.inputArea}>
            {tab === TAB_NAME.LOGIN ? (
              <>
                <UnderlineTextInput label="Email address" />
                <UnderlineTextInput label="Password" secureTextEntry={true} />
                <Text style={styles.forgot}>Forgot passcode?</Text>
              </>
            ) : (
              <>
                <UnderlineTextInput label="Email address" />
                <UnderlineTextInput label="Password" secureTextEntry={true} />
                <UnderlineTextInput
                  label="Confirm password"
                  secureTextEntry={true}
                />
              </>
            )}
          </View>
          <View style={styles.buttonView}>
            <LargeButton
              onPress={() => navigation.navigate(LINKS.HOME)}
              type={'secondary'}>
              {tab === TAB_NAME.LOGIN ? 'Login' : 'Sign up'}
            </LargeButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AuthenticationScreen;
