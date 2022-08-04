import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/routes/RootNavigation';

const App = props => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
export default App;
