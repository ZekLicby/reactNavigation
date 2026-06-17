import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../screens/MaterialTopTabScreens/Home";
import { Favorites } from "../screens/MaterialTopTabScreens/Favorites";
import { Categories } from "../screens/MaterialTopTabScreens/Categories";
import { Menu } from "../screens/MaterialTopTabScreens/Menu";
import { LittleCar } from "../screens/MaterialTopTabScreens/LittleCar";
import Icon from "@expo/vector-icons/Ionicons";

export const MaterialTopTabs = createMaterialTopTabNavigator({
  screens: { Home, Categories, LittleCar, Favorites, Menu },
});