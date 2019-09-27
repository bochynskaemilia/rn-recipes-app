import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import RecipesNavigator from "./RecipesStack";
import FavNavigator from "./FavoritesStack";

import Colors from "../constants/Colors";

const RecipesFavTabNavigator = createBottomTabNavigator(
  {
    Recipes: {
      screen: RecipesNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }
  }
);

export default RecipesFavTabNavigator;
