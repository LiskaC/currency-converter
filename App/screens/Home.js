import React, {useState} from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from "../constants/colors";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        alignContent: "center"
    },
    content: {
        paddingTop: screen.height * 0.05
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
    },
    header :{
        alignItems: "flex-end",
        marginHorizontal: 20,
        marginTop: 10
    }
});

export default ({ navigation }) => {
    const basecurrency = "USD";
    const quotecurrency = "GBP";
    const conversionrate = 0.86;
    const date = new Date();

    const [scrollEnabled, setScrollEnabled] = useState(false);


    return (
    <View style={styles.container}>
        <ScrollView scrollEnabled={scrollEnabled}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

        <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={() => navigation.push("Options")} >
              <Entypo name="cog" size={32} color={colors.white} />
            </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
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

            <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible) }/>
            </View>
        </ScrollView>
    </View>)
};