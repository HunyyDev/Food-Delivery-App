import React from 'react';
import LoginScreen from './src/screens/auth/index.js';
import OnboardingScreen from './src/screens/onboarding/index.js';
import HomeScreen from './src/screens/home/index.js';
import RootNavigator from './src/routes/RootNavigator.js';
import DeliveryScreen from './src/screens/checkout/DeliveryScreen.js';
import PaymentScreen from './src/screens/checkout/PaymentScreen.js';
import InformationScreen from './src/screens/profile/InformationScreen.js';
import MyProfileScreen from './src/screens/profile/MyProfileScreen.js';
import DrawerHome from './src/routes/DrawerHome.js';

const App = props => {
  return (
    // <DeliveryScreen />
    // <PaymentScreen />
    // <InformationScreen />
    // <MyProfileScreen />
    <RootNavigator {...props} />
    // <>
    // <DrawerHome {...props} />
    // </>
  );
};

export default App;
