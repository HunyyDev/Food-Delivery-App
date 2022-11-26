import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {IMG_GOOGLE} from '../../assets/images';

import FONT_FAMILY from '../../constants/fonts';
import COLORS from '../../constants/colors';
import Back from '../../components/Back/Back';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Authentication = props => {
  const navigation = props.navigation;
  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '563269076578-jrtmsr5fcoh7fq1pk2sc7k75dqdpv9s0.apps.googleusercontent.com',
    });
  }, []);
  const googleSignin = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };
  const [useData, setUserData] = useState(0);

  return (
    <View style={styles.backGround}>
      <ScrollView>
        <Back navigation={props.navigation} style={styles.back}></Back>
        <Text style={styles.Note}>Continute</Text>
        <Text style={styles.NoteBottom}>with your account</Text>

        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Email</Text>
          <TextInput style={styles.Text}></TextInput>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Password</Text>
          <TextInput style={styles.Text} secureTextEntry={true}></TextInput>
        </View>
        <TouchableOpacity onPress={navigateToHomePage}>
          <View style={styles.button}>
            <Text style={styles.TextFrame}>Get Started</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.fieldSetLine}>
          <Text style={styles.legendLine}>Or sign in with</Text>
          <TextInput style={styles.Text} secureTextEntry={true}></TextInput>
        </View>
        <Pressable
          onPress={() =>
            googleSignin()
              .then(res => {
                console.log(res.user);
                setUserData(res.user);
              })
              .catch(error => console.log(error))
          }>
          <Image style={styles.Image} source={IMG_GOOGLE}></Image>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 53,
    height: 53,
    margin: 50,
  },
  backGround: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  NoteBottom: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.BLACK,
    fontSize: 30,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    marginLeft: 40,
  },
  Note: {
    marginTop: 250,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.BLACK,
    fontSize: 30,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    marginLeft: 40,
  },
  Text: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    color: COLORS.BLACK,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  fieldSet: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: 348,
    height: 56,
    alignItems: 'center',
    borderColor: COLORS.SLIVER,
  },
  fieldSetLine: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    width: 348,
    height: 1,
    alignItems: 'center',
    borderColor: COLORS.SLIVER,
    backgroundColor: COLORS.SLIVER,
  },
  legendLine: {
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: -10,
    left: 10,
    backgroundColor: COLORS.WHITE,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    color: COLORS.BLACK,
    fontSize: 16,
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: COLORS.WHITE,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.BLACK,
    fontSize: 16,
  },
  button: {
    width: 344,
    height: 56,
    // marginLeft: 51,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 36,
    backgroundColor: COLORS.JUNGLE_GREEN,
  },
  TextFrame: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.WHITE,
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  Image: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});
export default Authentication;
