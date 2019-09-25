import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>RecipeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeScreen;
