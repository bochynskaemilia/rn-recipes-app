import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import RecipesFavTabNavigator from "./BottomTabs";
import FiltersScreen from "../screens/FiltersScreen";
import { defaultStackNavOptions } from "./options";
import Colors from "../constants/Colors";

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    RecipesFavs: { screen: RecipesFavTabNavigator, drawerLabel: "Meals" },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      inactiveTintColor: Colors.secondaryColor,
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }
  }
);

export default DrawerNavigator;
