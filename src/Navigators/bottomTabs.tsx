import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/BottomTabScreens/Home";
import { Favorites } from "../screens/BottomTabScreens/Favorites";
import { Categories } from "../screens/BottomTabScreens/Categories";
import { Menu } from "../screens/BottomTabScreens/Menu";
import { LittleCar } from "../screens/BottomTabScreens/LittleCar";
import Icon from "@expo/vector-icons/Ionicons";

export const BottomTab = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        tabBarIcon: () => <Icon name="home" size={16} />,
      },
    },
    Categories: {
      screen: Categories,
      options: {
        headerShown: false,
        tabBarIcon: () => <Icon name="list" size={16} />,
      },
    },
    LittleCar: {
      screen: LittleCar,
      options: {
        headerShown: false,
        tabBarIcon: () => <Icon name="cart" size={16} />,
      },
    },
    Favorites: {
      screen: Favorites,
      options: {
        headerShown: false,
        tabBarIcon: () => <Icon name="heart" size={16} />,
      },
    },
    Menu: {
      screen: Menu,
      options: {
        headerShown: false,
        tabBarIcon: () => <Icon name="menu" size={16} />,
      },
    },
  },
  screenOptions: {
    animation: "shift",
    tabBarActiveTintColor: "skyblue",
    tabBarInactiveTintColor: "gray",
    tabBarShowLabel: true,
  },
});
