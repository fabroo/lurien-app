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
  console.log("EUUUU ACA", props)
  let { dni, username, pfp, qrLink, companyID } = user


  return (
    <>
      <Navbar />
      <View style={styles.body}>
        <Text style={styles.text}>
          Tu QR!
        </Text>
        <View style={styles.container}>
          {qrLink !== "" ? (
            <Image
              style={styles.qrImg}
              source={
                {
                  uri: qrLink
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
    borderRadius: 20,
    
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  container:{
    marginTop:15,
    marginBottom:30,
    // backgroundColor: '#333',
    width: width*.9,
    height: height*.42,
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  text:{
    fontSize: 40,
     fontFamily:"Inter_600SemiBold",
  }
});

export default HomeScreen