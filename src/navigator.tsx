import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

// Navigator
const RootStack = createNativeStackNavigator({
  screens: { Home: Home },
});

// Navegação - estática
const Navigation = createStaticNavigation(RootStack);

// Componente do navigator que será exportado para ser utilizado no App.tsx
export const Navigator = () => {
    return <Navigation />;
};
