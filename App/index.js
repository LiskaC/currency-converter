import React from "react";
import GlobalStyles from './GlobalStyles';
import { SafeAreaView } from "react-native";
import Navigation from "./config/Navigation";

export default () => {

  return(
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Navigation />
    </SafeAreaView>
  )};