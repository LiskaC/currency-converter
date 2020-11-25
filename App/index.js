import React from "react";
import GlobalStyles from './GlobalStyles';
import { SafeAreaView } from "react-native";
import Options from './screens/Options';

export default () => {

  return(
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Options />
    </SafeAreaView>
  )};