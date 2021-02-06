import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {IconButton} from  'react-native-paper';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;

  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'the movie app', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen name="movie" component={Movie} option={{title: '', headerLeft: () => buttonLeft()}} />
      <Stack.Screen
        name="news"
        component={News}
        option={{title: 'Nuevas Peliculas', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="polular"
        component={Popular}
        option={{title: 'Peliculas polulares', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen name="Search" component={Search} option={{title: '', headerLeft: () => buttonLeft()}} />
    </Stack.Navigator>
  );
}
