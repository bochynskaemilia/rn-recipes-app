import { createStackNavigator } from "react-navigation-stack";

import FavoritesScreen from "../screens/FavoritesScreen";
import RecipeScreen from "../screens/RecipeScreen";

import { defaultStackNavOptions } from "./options";

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Recipe: RecipeScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

export default FavNavigator;
