import React from "react";
import { View, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

export default () => {
    return(
        <SafeAreaView>
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
                    onPress={() => alert("Pressed!")}
                />

                <RowSeparator />

                <RowItem 
                    rightIcon={<Entypo name="export" size={20} color={colors.blue} />} 
                    text="React Native By Example"
                    onPress={() => alert("Pressed!")}
                />
            </View>
        </SafeAreaView>
)
};