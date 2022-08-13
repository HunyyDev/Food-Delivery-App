import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import COLORS from '../../constants/colors';

GoogleSignin.configure({
  webClientId:
    '642729712679-aja80f7io5vro8cp0ggliosacipfqfne.apps.googleusercontent.com',
});

const LoginGoogle = () => {
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
  return (
    <View style={styles.container}>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      <Button title="Google Sign-Out" onPress={onSignOut} />
    </View>
  );
};

export default LoginGoogle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
});
