import React from "react";
import { Text, StyleSheet, View } from "react-native";

const DavidScreen = () => {
  const introContent1 = "Getting started with React Native DavidScreen Style Yes!";
  const name1 = "David : ) Screen Howdy Doo Dah-  React DavidScreen";
  const nameContent1 = `My name is --> ${name1}.`
  return (
    <View>
      <Text>{introContent1}</Text>
      <Text>{nameContent1}</Text>
    </View>
  );
};

export default DavidScreen;
