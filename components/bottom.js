import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from './profile'
import Setting from './settings'

const Tab = createMaterialBottomTabNavigator();


function Bottom({ route }) {
    return (
        <Tab.Navigator
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: '#333' }}
        >
            <Tab.Screen name="SETTING" user={route} component={Setting}
            options={{
                tabBarLabel: 'qrcode',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="qrcode" color={color} size={26} />
                ),
              }}
            />
             <Tab.Screen name="PROFILE" component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
            />
        </Tab.Navigator>
        
    );
}

export default Bottom;