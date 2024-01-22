import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {theme} from './src/theme/theme';
import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
        {/* <LoginScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
