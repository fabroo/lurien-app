import { View } from 'native-base';
import React, { useState, useContext } from 'react';
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get("window")

const HomeScreen = ({ navigation, route }) => {

  const { user } = route.params;
  let { dni, username, pfp, qrLink, companyID } = user

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <Text style={styles.username}>{username}</Text>

      <Image
        style={styles.qrImg}
        source={{
          uri: qrLink,
        }}
      />

      <AppButton onPress={() =>navigation.navigate('login')} title="Logout" />
    </View>
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
    textAlign: 'center',
    height: 300,
    width: 300,

  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#282828",
    width: width / 2,
    marginTop: 50,
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

export default HomeScreen