import React from "react";
import { Text, StyleSheet, View } from "react-native";

const DRScreen = () => {
  const introContent = "Getting started with DRs React Native DR Style Yes!";
  const name = "D. Rothman";
  const nameContent = `My name is --> ${name}.   Howdy Doo Dah-  React!`;
  return (
    <View>
      <Text style={styles.headingStyle}>{introContent}</Text>
      <Text style={styles.textStyle}>{nameContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  headingStyle: {
    fontSize: 65
  }
});

export default DRScreen;
