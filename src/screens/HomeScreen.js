import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigate = navigation.navigate;
  return (
    <View>
      <Text style={styles.text}>Hi there Bentzy - 
      98 svxfsdsdxz!, Cheers and L'chaim you rock!!!test?</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <TouchableOpacity onPress={() => navigate("List")} >
        <Text>
          Go to List Demo
        </Text>
      </TouchableOpacity>


      <Button title="David Demo" onPress={() => navigate("David")} />
      <Button title="DR Demo" onPress={() => navigate("DR")} />
      <Button title="List Demo" onPress={() => navigate("List")} />
      <Button title="Image Demo" onPress={() => navigate("Images")} />
      <Button title="Incrementor" onPress={() => navigate("Incrementor")} />
      <Button title="Color" onPress={() => navigate("Color")} />
      <Button title="ColorConfig" onPress={() => navigate("ColorConfig")} />
      <Button title="Text" onPress={() => navigate("Text")} />
      <Button title="Box" onPress={() => navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;