import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();



export default function Navigation() {
  return (
    <View>
      <Text>Estamos en home</Text>
    </View>
  );
}
