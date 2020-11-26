import React from "react";
import { TouchableOpacity, TextInput, StyleSheet, View , Text} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 20,
        flexDirection: "row"
    },
    button: {
        padding: 15,
        borderColor: colors.border,
        borderRightWidth: 1
    },
    buttonText: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        padding: 10,
        color: colors.textLight
    }
});

export const ConversionInput = ({ 
    text,
    onButtonPress,
    ...props
 }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button} >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>

            <TextInput 
            style={styles.input} 
            {...props} />
        </View>
    )
};