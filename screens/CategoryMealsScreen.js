import React from "react";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/mock-data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
