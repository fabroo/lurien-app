import Login from './components/login'
import Settings from './components/settings'
import Register from './components/register'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
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
              headerShown:false
            }
          }
          name="setting"
          component={Settings}
        />
        <Stack.Screen
           options={
            {
              headerShown:false
            }
          }
          name="register"
          component={Register}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};