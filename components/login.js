import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Navbar from './navbar'

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';


export default function Login({ navigation }) {

  const { width } = Dimensions.get("window")
  const [dni, setDni] = useState("");
  const [psw, setPsw] = useState("");
  const [visibleError, setVisibleError] = useState(false);
  const [loading, setLoading] = useState(false);

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles1.appButtonContainer} >
      <Text style={styles1.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  const login = () => {
    setLoading(true);
    if (dni === null || psw === null) {
      setVisibleError(true)
      setTimeout(() => {
        setVisibleError(false)

      }, 1000);
    }
    else {
      fetch(`https://backend.lurien.team/api/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: dni,
          password: psw
        }),
      })
        .then(res => {
          setLoading(false);
          if (res.status !== 401) {
            res.json().then(data => {
              let { dni, username, pfp, qrLink, companyID } = data.user
              let user = { dni, username, pfp, qrLink, companyID };

              global.user = user;
              navigation.navigate('bottom', { user })

            })
          }
          else {
            setVisibleError(true)
            setTimeout(() => {
              setVisibleError(false)

            }, 3500);
          }
        }
        )
      setDni("");
      setPsw(null);
    }
  }

  
  const styles1 = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: "#282828",
      width: width / 1.5,
      marginTop: 20,
      borderRadius: 10,
      paddingVertical: 10,
      textAlign: 'center',
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 20,
      fontFamily:"Inter_500Medium",
      color: "white",
      alignSelf: "center",
    },
    texto: {
      fontSize: 16,
      marginTop: 20,
      fontFamily:"Inter_500Medium",
    },
    textoBold: {
      textDecorationLine: 'underline',
      fontStyle: "italic",
    }
  });
  return (
    <>
      <Navbar />
      <View style={{
        flex: 1,
        flexDirection: "row",
        height: 1
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
        </View>
        <View style={{
          width: width / 3,
          height: 70
        }}>
        </View>
      </View >
      <View style={{ alignItems: 'center', flex: 4 }}>
        <Text style={{ fontSize: 40, fontFamily:"Inter_600SemiBold",  }}> Login </Text>
        <TextInput
          key="dni"
          name="dni"
          keyboardType="numeric"

          style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 50,  fontFamily:"Inter_500Medium"}}
          placeholder="DNI:"
          onChangeText={dni => setDni(dni)}
          defaultValue={dni} />
        <TextInput
          key="password"
          name="password"
          secureTextEntry={true}
          style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 20, marginBottom: 40, fontFamily:"Inter_500Medium" }}
          placeholder="Password"
          onChangeText={password => setPsw(password)}
          defaultValue={psw} />

        <AppButton onPress={login} title="Submit" />
        <Text style={styles1.texto}>O crear cuenta, <Text style={styles1.textoBold} onPress={() => navigation.navigate('register')}>Aquí</Text></Text>
        <FancyAlert
          visible={visibleError}
          icon={<View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d1443f',
            borderRadius: 50,
            width: '100%',
          }}><Text style={{ color: 'white' ,fontSize:26}}>:(</Text></View>}
          style={{ backgroundColor: 'white' }}
        >
          <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 20 }}>Chequea tus datos!</Text>
        </FancyAlert>
        <FancyAlert
          visible={loading}
          icon={<View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd',
            borderRadius: 50,
            width: '100%',
          }}><Text style={{ color: 'white' ,fontSize:26}}>;)</Text></View>}
          style={{ backgroundColor: 'white' }}
        >
          <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 20 }}>Loading!</Text>
        </FancyAlert>
      </View>

    </>
  );
}
