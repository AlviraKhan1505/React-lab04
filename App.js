import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { BooksProvider } from './context/BooksContext';
import HomeStack from './navigation/HomeStack';
import Borrowed from './screens/Borrowed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BooksProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#4CAF50', 
            tabBarInactiveTintColor: '#888', 
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="book" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Borrowed"
            component={Borrowed}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="bookmark" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </BooksProvider>
  );
}