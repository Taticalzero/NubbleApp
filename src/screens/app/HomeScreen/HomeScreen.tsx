import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';


export function  HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="paragraphLarge"> Tela Inicial do APP</Text>
      <Button title="Ir para Setting" onPress={() => navigation.navigate('SettingsScreen')}> </Button>
    </Screen>
  );
}
