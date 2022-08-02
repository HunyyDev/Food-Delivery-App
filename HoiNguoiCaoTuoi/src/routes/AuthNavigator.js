<<<<<<< HEAD
import {StyleSheet} from 'react-native';
=======
>>>>>>> 5845717fc457df84f8cd9c78a691baf700e45c7e
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../constants/screens';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = props => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.AUTH.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.SIGN_UP}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
<<<<<<< HEAD

const styles = StyleSheet.create({});
=======
>>>>>>> 5845717fc457df84f8cd9c78a691baf700e45c7e
