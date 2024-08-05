import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BookDetail from '../screens/BookDetail';
import BooksList from '../screens/BooksList';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksList"
        component={BooksList}
        options={{ headerShown: true, title: 'Books' }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{ headerShown: true, title: 'Book Detail' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;