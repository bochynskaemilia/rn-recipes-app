import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButtons";
import MealList from "../components/MealList";
import OpenSansText from "../components/OpenSansText";

const FavoritesScreen = ({ navigation }) => {
  const favs = useSelector(state => state.meals.favoriteMeals);

  if (!favs || !favs.length) {
    return (
      <View style={styles.screen}>
        <OpenSansText>No favorites have been added yet.</OpenSansText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
