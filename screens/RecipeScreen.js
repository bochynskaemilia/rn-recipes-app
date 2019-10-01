import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButtons";
import OpenSansText from "../components/OpenSansText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <OpenSansText>{props.children}</OpenSansText>
    </View>
  );
};

const RecipeScreen = props => {
  const dispatch = useDispatch();

  const mealId = props.navigation.getParam("recipeId");
  const meals = useSelector(state => state.meals.meals);

  const selectedMeal = meals.find(meal => meal.id === mealId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

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
  const toggleFavorite = navigationData.navigation.getParam("toggleFavorite");
  const recipeTitle = navigationData.navigation.getParam("recipeTitle");
  return {
    headerTitle: recipeTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
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
