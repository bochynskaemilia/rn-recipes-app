import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = itemData => {
    const { item } = itemData;

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
              recipeId: itemData.item.id
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
