import React from "react";
import { StatusBar, FlatList, View} from "react-native";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import Navigation from "../config/Navigation";

export default ({ navigation }) => {
    return (   
    <View style={{ backgroundColor: colors.white }}>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    <FlatList 
        data={currencies}
        renderItem={({ item }) => {
            return <RowItem text={item} onPress={() => navigation.pop()} />
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
    />
    </View>
)};