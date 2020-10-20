import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const introContent = "Getting started with React Native DR Style Yes!";
  const name = "David DR2";
  const nameContent = `My name is --> ${name}.`;
  return (
    <View>
      <Text style={styles.headingStyle}>{introContent}</Text>
      <Text style={styles.textStyle}>{nameContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  headingStyle: {
    fontSize: 45
  }
});

export default ComponentsScreen;
