import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { AppRegistry } from 'react-native';
import { COLORS, SIZES} from './constants';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './pages/ProductDetails';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
       <Stack.Screen
       name="Product Description" 
       component={ProductDetails}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
