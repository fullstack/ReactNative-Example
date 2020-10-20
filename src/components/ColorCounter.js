import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, handleIncrease, handleDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={handleIncrease} />
      <Button title={`Decrease ${color}`} onPress={handleDecrease} />
    </View>
  );
};
const styled = StyleSheet.create({});

export default ColorCounter;
