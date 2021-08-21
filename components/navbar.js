import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';

import Logo from '../assets/LurienIcon.png'

import {
  View,
  Dimensions,
  Image,
} from 'react-native';
export default function Navbar({ navigation }) {
  const { width } = Dimensions.get("window")

  return (
    <>
      <StatusBar hidden={true} />
        <View style={{
          flexDirection: "row",
          height: "auto",
          paddingTop:25
        }}>
          <View style={{
            width: width / 3,
            height: 70
          }}>
          </View>
          <View style={{
            width: width / 3,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={Logo} style={{ width: 55, height: 55 }} />
          </View>
          <View style={{
            width: width / 3,
            height: 70
          }}>
          </View>
        </View >

    </>
  );
}
