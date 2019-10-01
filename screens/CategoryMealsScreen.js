import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/mock-data";
import OpenSansText from "../components/OpenSansText";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const meals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if (!displayedMeals || !displayedMeals.length) {
    return (
      <View style={styles.screen}>
        <OpenSansText>No meals found.</OpenSansText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
