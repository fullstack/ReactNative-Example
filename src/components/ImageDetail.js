import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  console.log(imageSource);
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title} - ImageDetail</Text>
      <Text>{score} - Score</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
