import Screens from '../constants/screen';
import HomeScreen from '../screens/Home';
import {Stack} from './AuthNavigator';
import React, {useEffect} from 'react';
import Profiles from '../screens/Temp/Profiles';
import Offer from '../screens/Temp/Offer';
import Orders from '../screens/Temp/Orders';
import Privacy from '../screens/Temp/Privacy';
import Security from '../screens/Temp/Security';
import SearchScreen from '../screens/Search/SearchScreen';
import DetailDish from '../screens/Dish/DetailDish';
import ProfileScreen from '../screens/Profile';
import DetailProfile from '../screens/Profile/DetailProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainNavigator = () => {
  useEffect(() => {
    const setLoading = async () => {
      await AsyncStorage.setItem('LoggedIn', 'loading');
    };
    setLoading();
  }, []);
  return (
    <>
      <Stack.Navigator
        initialRouteName={Screens.HOME}
        screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={Screens.OFFERS} component={Offer} />
        <Stack.Screen name={Screens.ORDERS} component={Orders} />
        <Stack.Screen name={Screens.PRIVACY} component={Privacy} />
        <Stack.Screen name={Screens.SECURITY} component={Security} />
        <Stack.Screen name={Screens.SEARCH} component={SearchScreen} />
        <Stack.Screen name={Screens.DETAIL} component={DetailDish} />
        <Stack.Screen name={Screens.DETAIL_PROFILE} component={DetailProfile} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
