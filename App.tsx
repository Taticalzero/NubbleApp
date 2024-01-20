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
import { Button } from './src/components/Button/Button';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button disabled preset="outline" title="Lading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
