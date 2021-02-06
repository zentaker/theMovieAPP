import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        option={{title: 'the movie app'}}
      />
      <Stack.Screen name="movie" component={Movie} option={{title: ''}} />
      <Stack.Screen
        name="news"
        component={News}
        option={{title: 'Nuevas Peliculas'}}
      />
      <Stack.Screen
        name="polular"
        component={Popular}
        option={{title: 'Peliculas polulares'}}
      />
      <Stack.Screen name="Search" component={Search} option={{title: ''}} />
    </Stack.Navigator>
  );
}
