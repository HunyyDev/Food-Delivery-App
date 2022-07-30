import React from 'react';
import RootNavigator from './src/routes/RootNavigator';

const App = props => {
  return (
    // <OnboardingScreen />
    <>
      <RootNavigator {...props} />
    </>
  );
};

export default App;
