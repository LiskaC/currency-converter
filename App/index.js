import React from "react";
import GlobalStyles from './GlobalStyles';
import { SafeAreaView } from "react-native";
import Options from './screens/Options';
import Home from './screens/Home';

export default () => {

  return(
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Home />
    </SafeAreaView>
  )};