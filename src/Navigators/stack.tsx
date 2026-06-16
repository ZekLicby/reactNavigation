import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/StackScreens/Screen1";
import { Screen2 } from "../screens/StackScreens/Screen2";

export const Stack = createStackNavigator({screens:{Screen1, Screen2}});