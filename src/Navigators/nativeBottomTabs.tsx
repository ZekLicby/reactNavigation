import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { Home } from "../screens/NativeBottomTabScreens/Home";
import { Favorites } from "../screens/NativeBottomTabScreens/Favorites";
import { Categories } from "../screens/NativeBottomTabScreens/Categories";
import { Menu } from "../screens/NativeBottomTabScreens/Menu";
import { LittleCar } from "../screens/NativeBottomTabScreens/LittleCar";

export const NativeBottomTabs = createNativeBottomTabNavigator({
  screens: { Home, Favorites, Categories, Menu, LittleCar },
});
