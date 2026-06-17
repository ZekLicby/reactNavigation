import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/DrawerScreens/Home";
import { Favorites } from "../screens/DrawerScreens/Favorites";
import { Categories } from "../screens/DrawerScreens/Categories";
import { Menu } from "../screens/DrawerScreens/Menu";
import { LittleCar } from "../screens/DrawerScreens/LittleCar";
import Icon from "@expo/vector-icons/Ionicons";

export const Drawer = createDrawerNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        drawerIcon: () => <Icon name="home" size={16} />,
      },
    },
    Categories: {
      screen: Categories,
      options: { drawerIcon: () => <Icon name="list" size={16} /> },
    },
    LittleCar: {
      screen: LittleCar,
      options: { drawerIcon: () => <Icon name="cart" size={16} /> },
    },
    Favorites: {
      screen: Favorites,
      options: { drawerIcon: () => <Icon name="heart" size={16} /> },
    },
    Menu: {
      screen: Menu,
      options: { drawerIcon: () => <Icon name="menu" size={16} /> },
    },
  },
  screenOptions: {
    drawerActiveTintColor: "skyblue",
    drawerInactiveTintColor: "gray",
  },
});
