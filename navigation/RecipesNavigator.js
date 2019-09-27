import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import RecipeScreen from "../screens/RecipeScreen";

import Colors from "../constants/Colors";

const RecipesNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    Recipe: RecipeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.accentColor
      },
      headerTintColor: Colors.primaryColor
    }
  }
);

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
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor
    }
  }
);

export default createAppContainer(RecipesFavTabNavigator);
