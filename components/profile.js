import React from 'react';
import Navbar from './navbar'

import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { View } from 'native-base';

const { width, height } = Dimensions.get("window")

export default function Profile({navigation}) {

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
    return (
        <>
            <Navbar />
            <View style={styles.body}>
                <Image
                    style={styles.pfp}
                    source={
                        {
                            uri: global.user.pfp
                        }
                    }
                />
                <Text style={styles.text}>Username: {global.user.username}</Text>
                <Text style={styles.text}>Dni: {global.user.dni}</Text>
                <Text style={styles.text}>Company Id: {global.user.companyID}</Text>
                <AppButton onPress={() => {
                    global.user = {}
                    navigation.navigate('login')
                }} title="Logout" />

            </View>


        </>
    );

}
const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        margin: 20

    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
    ,
    pfp: {
        height: 100,
        width: 100
    }
    , text: {
        fontSize: 20,
        margin: 20
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
})