import { View } from 'native-base';
import React, { useState, useContext } from 'react';
import Navbar from './navbar'

import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  
} from 'react-native';
const { width, height } = Dimensions.get("window")
const No = require('../assets/no-qr.jpg')
const HomeScreen = ({ navigation, props }) => {

  // const { user } = usuario;
  console.log("EUUUU ACA",props)
  let { dni, username, pfp, qrLink, companyID } = user


  return (
    <>
    <Navbar/>
    <View style={styles.body}>

      {qrLink !== "" ? (
              <Image
              style={styles.qrImg}
              source={
                {
                  uri : qrLink
                }
              }
            />
      
      ) : (
              <Image
              style={styles.qrImg}
              source={No}
            />
      
      )}
     
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 20,

  },
  pfp: {
    height: 200,
    width: 200
  },
  qrImg: {
    height: 300,
    width: 300,

  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default HomeScreen