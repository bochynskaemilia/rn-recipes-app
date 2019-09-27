import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import RecipeScreen from "../screens/RecipeScreen";

import { defaultStackNavOptions } from "./options";

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

export default RecipesNavigator;
