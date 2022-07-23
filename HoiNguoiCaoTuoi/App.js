import React from 'react';
<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from './src/constants/colors';
import {IMG_Logo, IMG_Background} from './src/assets/images';
import FONT_FAMILY from './src/constants/fonts';
import {scaleWidth} from './src/constants/responsive';
=======
import {StyleSheet, View} from 'react-native';
import LoginScreen from './src/screens/auth';
import OnboardingScreen from './src/screens/onboarding';
>>>>>>> origin/HoiNguoiCaoTuoi/dev

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = props => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShow: false}}>
//           <Stack.Screen name="Onboarding" options={{headerShown: false}}>
//             {props => <OnboardingScreen {...props} />}
//           </Stack.Screen>

//           <Stack.Screen name="Login" options={{headerShown: false}}>
//             {props => <LoginScreen {...props} />}
//           </Stack.Screen>

//           <Stack.Screen name="Home" options={{headerShown: false}}>
//             {props => <HomeScreen {...props} />}
//           </Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </> 
//   );
// };

const App = props => {
  return (
    <>
      <View style={styles.container}>
        <LoginScreen {...props} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    alignSelf: 'stretch',
    marginTop: 0,
  },

  logoContainer: {
    width: scaleWidth(74),
    height: scaleWidth(74),
    borderRadius: scaleWidth(74) / 2,
    backgroundColor: CUSTOM_COLOR.Bold,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleWidth(56),
    marginLeft: scaleWidth(49),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  titleText: {
    fontSize: scaleWidth(65),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.white,
    marginLeft: scaleWidth(49),
    fontWeight: 'bold',
  },

  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  background: {
    width: Dimensions.get('window').width,
    height: 430,
    justifyContent: 'flex-end',
  },

  button: {
    backgroundColor: CUSTOM_COLOR.white,
    height: scaleWidth(60),
    width: scaleWidth(300),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.SunsetOrange,
=======
>>>>>>> origin/HoiNguoiCaoTuoi/dev
  },
});

export default App;
