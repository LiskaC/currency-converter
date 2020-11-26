import React from "react";
import { View, SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openURL = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert("Sorry, something went wrong")
    });
    
}

export default () => {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "#a73" }}>
            <ScrollView>
                <View>
                    <RowItem 
                        rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />} 
                        text="Themes"
                        onPress={() => alert("Pressed!")}
                    />

                    <RowSeparator />

                    <RowItem 
                        rightIcon={<Entypo name="export" size={20} color={colors.blue} />} 
                        text="React Native Basics"
                        onPress={() => openURL("https://www.google.com")}
                    />

                    <RowSeparator />

                    <RowItem 
                        rightIcon={<Entypo name="export" size={20} color={colors.blue} />} 
                        text="React Native By Example"
                        onPress={() => openURL("https://www.google.com")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
)
};