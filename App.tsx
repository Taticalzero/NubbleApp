/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Olá Nuuble
          </Text>
        </View>
        <Box flexDirection="row">
             <Icon name="eyeOn" color="error" size={40} />
             <Icon name="eyeOff" color="carrotSecondary" size={50} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
