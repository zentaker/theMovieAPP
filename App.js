import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/Navigation/Navigation";

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation/>

      </NavigationContainer>
    </PaperProvider>
  );
}
