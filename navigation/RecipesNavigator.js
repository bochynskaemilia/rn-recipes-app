import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
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

export default createAppContainer(RecipesNavigator);
