import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import HabitList from './HabitList';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';

import ValueProvider from './ValueContext';
import TextInputBox from "./TextInput";

const Tab = createBottomTabNavigator();

export default function App() {
  const data={username: "User#1", status:"admin"};
  return (
    <ValueProvider value= {data}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="HabitList" component={HabitList} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
}