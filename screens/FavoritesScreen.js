import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButtons";
import MealList from "../components/MealList";
import { MEALS } from "../data/mock-data";

const FavoritesScreen = ({ navigation }) => {
  const favs = MEALS.filter(meal => meal.id === "m3" || meal.id === "m4");

  return <MealList listData={favs} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
