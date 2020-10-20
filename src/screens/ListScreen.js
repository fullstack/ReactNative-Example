import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend A", age: 23 },
    { name: "Friend B", age: 23 },
    { name: "Friend C", age: 23 },
    { name: "Friend D", age: 23 },
    { name: "Friend E", age: 23 },
    { name: "Friend F", age: 23 },
    { name: "Friend J", age: 23 },
    { name: "Friend K", age: 23 },
    { name: "Friend L", age: 23 }
  ];

  return (
    <FlatList
      // horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={el => el.name}
      data={friends}
      renderItem={({ item }) => {
       // item +
        //el== {item: {item: "friend "}, index: 0}
        return (
          <Text style={styles.itemStyle}>
            Friend: {item.name} 
             ,  *# Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 35
  }
});

export default ListScreen;
