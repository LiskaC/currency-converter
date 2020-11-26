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
    containerDisabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        backgroundColor: colors.white,
        padding: 15,
        borderColor: colors.border,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
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
    const containerStyles = [styles.container];
    
    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button} >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>

            <TextInput 
            style={styles.input} 
            {...props} />
        </View>
    )
};