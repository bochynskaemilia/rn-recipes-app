import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/mock-data";

const RecipeScreen = ({ navigation }) => {
  const recipeId = navigation.getParam("recipeId");
  const recipe = MEALS.find(meal => recipeId === meal.id);

  return (
    <View style={styles.screen}>
      <Text>{recipe.title}</Text>
    </View>
  );
};

RecipeScreen.navigationOptions = navigationData => {
  const recipeId = navigationData.navigation.getParam("recipeId");
  const recipe = MEALS.find(meal => recipeId === meal.id);

  return {
    headerTitle: recipe.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeScreen;
