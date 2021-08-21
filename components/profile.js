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

export default function Profile({ navigation }) {

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
    return (
        <>
            <Navbar />
            <View style={styles.body}>
                <Text style={styles.profileTxt}>Profile:</Text>
                <View style={styles.container}>
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
                </View>
                    <View style={styles.backBtn}>
                        <AppButton onPress={() => {
                            global.user = {}
                            navigation.navigate('login')
                        }} title="Logout" />
                    </View>

            </View>



        </>
    );

}
const styles = StyleSheet.create({
    profileTxt: {
        fontSize: 40,
        fontFamily: "Inter_600SemiBold",
        marginLeft: 10,
        marginBottom: 20
    },
     title: {
        fontSize: 35,
        margin: 20

    },
    body: {
        // alignItems: 'center',
        paddingTop: 30,
        // justifyContent: 'center',
        height,
    }
    ,
    pfp: {
        height: 100,
        width: 100,
        borderRadius: 20
    }
    , text: {
        fontSize: 20,
        margin: 10,
        fontFamily: "Inter_500Medium"
    },
    container: {
        alignItems: "center"
    },
    appButtonContainer: {
        backgroundColor: "#282828",
        width: width / 1.5,
        marginTop: 20,
        borderRadius: 10,
        paddingVertical: 10,
        textAlign: 'center',
        paddingHorizontal: 12,

    },
    appButtonText: {
        fontSize: 20,
        fontFamily: "Inter_500Medium",
        color: "white",
        alignSelf: "center",
    },
    backBtn:{
        position: 'absolute',
        bottom:0,
        width,
        height:250,
        alignItems: "center",
    }
})