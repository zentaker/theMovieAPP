import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="App">
      <Drawer.Screen name="App" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
