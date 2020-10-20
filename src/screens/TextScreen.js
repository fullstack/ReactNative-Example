import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        //autoCapitalize="true"
        autoCorrect={false}
        style={styles.input}
        value={text}
        onChangeText={newText => {
          setText(newText);
        }}
      />
      {text.length < 5 && (
        <Text style={styles.error}>
          Password must be at least 5 characters long.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  },
  error: {
    color: "red",
    fontSize: 12
  }
});

export default TextScreen;
