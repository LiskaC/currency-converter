import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";

import colors from "../constants/colors";
import { Button }from "../components/Button";

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.height * 0.45
    },
    logo: {
        position: "absolute",
        width: screen.width * 0.25,
        height: screen.height * 0.25
    },
    text: {
        color: colors.white,
        fontSize: 13,
        textAlign: "center"
    },
    textHeader: {
        color: colors.white,
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default () => {
    const basecurrency = "USD";
    const quotecurrency = "GBP";
    const conversionrate = 0.86;
    const date = new Date();

    return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

        <View style={styles.logoContainer}>
            <Image 
            source={require('../assets/images/background.png')} 
            style={styles.logoBackground}
            resizeMode="contain" />
            <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain" />
        </View>

        <Text style={styles.textHeader}>Currency Converter</Text>

        <ConversionInput
        text={basecurrency}
        value="123"
        onButtonPress={() => alert("pressed button")}
        onChangeText={text => console.log("text", text)}
        keyboardType="numeric"
        />

        <ConversionInput
        text={quotecurrency}
        value="123"
        onButtonPress={() => alert("pressed button")}
        editable={false}
        />

        <Text style={styles.text}>
            {`1 ${basecurrency} = ${conversionrate} ${quotecurrency} as of ${format(date, "MMMM do, yyyy")}`}
        </Text>

        <Button text="Reverse Currencies" onPress={() => alert("todo!")} />

    </View>)
};