import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const { item } = itemData;
    const isFav = favoriteMeals.some(meal => meal.id === item.id);

    return (
      <MealItem
        image={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        title={item.title}
        onSelectMeal={() =>
          navigation.navigate({
            routeName: "Recipe",
            params: {
              recipeId: itemData.item.id,
              recipeTitle: itemData.item.title,
              isFav: isFav
            }
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={listData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
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

export default MealList;
