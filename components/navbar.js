import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';

import Logo from '../assets/LurienIcon.png'

const IP = "192.168.1.126"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
export default function Navbar({ navigation }) {
    const { width } = Dimensions.get("window")

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });
  const styles1 = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#282828",
      width: width / 2,
      marginTop: 20,
      borderRadius: 10,
      paddingVertical: 10,
      textAlign: 'center',
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#D3D3D3",
      alignSelf: "center",
    }
  });
  return (
    <>
      <StatusBar hidden />
      <View style={{ flex: 1, flexDirection: "column" }}>

        <View style={{
          flex: 1,
          flexDirection: "row",
          height: 1
        }}>
          <View style={{
            backgroundColor: "#D3D3D3",
            width: width / 3,
            height: 70
          }}>
          </View>
          <View style={{
            backgroundColor: "#D3D3D3",
            width: width / 3,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <Image source={Logo} style={{ width: 55, height: 55 }} />
          </View>
          <View style={{
            backgroundColor: "#D3D3D3",
            width: width / 3,
            height: 70
          }}>
          </View>
        </View >

      </View>
    </>
  );
}
