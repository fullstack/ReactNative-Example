import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    { source: require("../../assets/beach.jpg"), title: "Beach" , score: 3},
    { source: require("../../assets/mountain.jpg"), title: "Mountain",  score: "6"},
    { source: require("../../assets/forest.jpg"), title: "Forest", score: 9 }
  ];
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={image => image.source}
        renderItem={({ item }) => (
          <ImageDetail imageSource={item.source} title={item.title} score={item.score} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
