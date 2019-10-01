import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButtons";
import MealList from "../components/MealList";

const FavoritesScreen = ({ navigation }) => {
  const favs = useSelector(state => state.meals.favoriteMeals);
  console.log(favs);

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
