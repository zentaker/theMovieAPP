import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Text>Hola mundo</Text>
          <Button
            icon="home"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}
