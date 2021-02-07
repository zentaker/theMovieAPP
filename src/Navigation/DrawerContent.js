import React from 'react'
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper';

export default function DrawerContent(props) {
    const { navigation } = props;
   
    return (
    <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Nuevas peliculas "
                    onPress={ () => navigation.navigate('news') }/>
            </Drawer.Section>
        </DrawerContentScrollView> 
        
    );
}

const styles = StyleSheet.create({})
