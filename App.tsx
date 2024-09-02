import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DataScreen from './screens/DataScreen';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';





const App = () => {
  const Tab = createBottomTabNavigator();
  const [name, setName] = React.useState('');
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Data" component={DataScreen}></Tab.Screen>
        <Tab.Screen name = "Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name = "History" component={HistoryScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App