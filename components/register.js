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


export default function Register({ navigation }) {

    const { width } = Dimensions.get("window")
    const [dni, setDni] = useState("");
    const [psw, setPsw] = useState("");
    const [companyid, setCompanyid] = useState("");
    const [username, setUsername] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleError, setVisibleError] = useState(false);

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles1.appButtonContainer}>
            <Text style={styles1.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const login = () => {
        if (dni === null || psw === null || username === null || companyid === null) {
            setVisibleError(true)
            setTimeout(() => {
                setVisibleError(false)

            }, 1000);
        }
        else {
            fetch(`https://backend.lurien.team/api/user/register`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: psw,
                    companyID: companyid,
                    dni: dni
                }),
            })
                .then(data => data.json())
                .then(res => {

                    const { message } = res;

                    if (!message.msgError) {
                        setVisible(true)
                        setTimeout(() => {
                            setVisible(false)

                        }, 1000);
                    } else {

                        setVisibleError(true)
                        setTimeout(() => {
                            setVisibleError(false)

                        }, 1000);
                    }


                })
            setDni(null);
            setPsw(null);
            setCompanyid(null);
            setUsername(null);

        }
    }

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
        },
        texto: {
            fontSize: 12,
            marginTop: 20,
        }
        ,

        textoBold: {
            textDecorationLine: 'underline',

        }
    });
    return (
        <>
            <Navbar/>
            <View style={{ flex: 1, flexDirection: "column" }}>

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
                <View style={{ alignItems: 'center', flex: 6 }}>
                    <Text style={{ fontSize: 35 }}> Register </Text>
                    <TextInput
                        key="username"
                        name="username"
                        style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 20 }}
                        placeholder="Username"
                        onChangeText={username => setUsername(username)}
                        defaultValue={username} />
                    <TextInput
                        key="dni"
                        name="dni"
                        keyboardType="numeric"
                        style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 20 }}
                        placeholder="DNI:"
                        onChangeText={dni => setDni(dni)}
                        defaultValue={dni} />
                    <TextInput
                        key="companyid"
                        name="companyid"
                        style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 20 }}
                        placeholder="Company Id"
                        onChangeText={companyid => setCompanyid(companyid)}
                        defaultValue={companyid} />

                    <TextInput
                        key="password"
                        name="password"
                        style={{ width: width / 1.3, height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 20, marginBottom: 40 }}
                        placeholder="Password"
                        onChangeText={password => setPsw(password)}
                        defaultValue={psw} />

                    <AppButton onPress={login} title="Enter" />

                    <Text style={styles1.texto}>Ya tengo cuenta, <Text style={styles1.textoBold} onPress={() => navigation.navigate('login')}>Inicia Sesión</Text></Text>
                </View>
                <FancyAlert
                    visible={visible}
                    icon={<View style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#3fd152',
                        borderRadius: 50,
                        width: '100%',
                    }}><Text style={{ color: 'white' }}>:)</Text></View>}
                    style={{ backgroundColor: 'white',fontSize:26 }}
                >
                    <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 20 }}>Creada!, fijate  mail!</Text>
                </FancyAlert>
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
                    }}><Text style={{ color: 'white' }}>:(</Text></View>}
                    style={{ backgroundColor: 'white' ,fontSize:26}}
                >
                    <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 20 }}>Chequea tus datos!</Text>
                </FancyAlert>
            </View>
        </>
    );
}
