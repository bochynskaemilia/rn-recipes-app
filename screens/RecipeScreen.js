import React from "react";
import { ScrollView, View, Image, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/mock-data";

import HeaderButton from "../components/HeaderButtons";
import OpenSansText from "../components/OpenSansText";
import Colors from "../constants/Colors";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <OpenSansText>{props.children}</OpenSansText>
    </View>
  );
};

const RecipeScreen = props => {
  const mealId = props.navigation.getParam("recipeId");

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <OpenSansText>{selectedMeal.duration}m</OpenSansText>
        <OpenSansText>{selectedMeal.complexity.toUpperCase()}</OpenSansText>
        <OpenSansText>{selectedMeal.affordability.toUpperCase()}</OpenSansText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

RecipeScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("recipeId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20
  }
});
export default RecipeScreen;
