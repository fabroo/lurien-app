import Login from './components/login'
import Settings from './components/settings'
import Register from './components/register'
import Bottom from './components/bottom'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View } from 'react-native';

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <Text>loading</Text>
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              options={
                {
                  headerShown: false
                }
              }
              name="login"
              component={Login}
            />

            <Stack.Screen
              options={
                {
                  headerShown: false
                }
              }
              name="setting"
              component={Settings}
            />
            <Stack.Screen
              options={
                {
                  headerShown: false
                }
              }
              name="register"
              component={Register}
            />
            <Stack.Screen
              options={
                {
                  headerShown: false
                }
              }
              name="bottom"
              component={Bottom}
            />


          </Stack.Navigator>
        </NavigationContainer>
      </>

    );


  }
};