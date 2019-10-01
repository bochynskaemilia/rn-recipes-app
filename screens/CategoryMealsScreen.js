import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/mock-data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const meals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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
