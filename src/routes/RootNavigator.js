import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React, {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from '../components/CustomDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import useInternet from '../Hooks/useInternet';
import NoInternetScreen from '../screens/NoInternetScreen';
import LoadingScreen from '../screens/LoadingScreen';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const AuthContext = createContext();

const setStatus = (prevState, action) => {
  if (action.type === 'sign-in') {
    return {
      ...prevState,
      isLoggedIn: true,
      isLoading: false,
    };
  } else if (action.type === 'loading') {
    return {
      ...prevState,
      isLoading: true,
    };
  } else {
    return {
      ...prevState,
      isLoggedIn: false,
      isLoading: false,
    };
  }
};

const RootNavigator = () => {
  const [state, dispatch] = useReducer(setStatus, {
    isLoggedIn: false,
    isLoading: true,
  });
  useEffect(() => {
    const getData = async () => {
      let status = await AsyncStorage.getItem('LoggedIn');
      dispatch({type: status});
    };
    getData();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        dispatch({type: 'sign-in'});
      },
      loading: async () => {
        dispatch({type: 'loading'});
      },
      signOut: async () => {
        dispatch({type: 'sign-out'});
      },
    }),
    [],
  );
  // const isOnline = useInternet();
  const [isOnline, setIsOnline] = useState(true);
  const tricky = useCallback(() => {
    setIsOnline(!isOnline);
  }, [setIsOnline]);
  if (!isOnline) {
    return <NoInternetScreen state={isOnline} setter={tricky} />;
  }

  if (state.isLoading) {
    return (
      <AuthContext.Provider value={authContext}>
        <LoadingScreen />
      </AuthContext.Provider>
    );
  }

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <CustomDrawer>
          <NavigationContainer ref={navigationRef}>
            {state.isLoggedIn === true ? <MainNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </CustomDrawer>
      </AuthContext.Provider>
    </>
  );
};

export default RootNavigator;
