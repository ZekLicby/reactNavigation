import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/NativeStackScreens/Home";
import { Login } from "../screens/NativeStackScreens/Login";

// Navigator do tipo Stack, onde as telas são empilhadas, ou seja, a tela atual é a última tela da pilha e para voltar para a tela anterior basta remover a última tela da pilha. Existem outros tipos de navigator como o Tab, Drawer, etc. Cada um com suas características e funcionalidades específicas.
export const NativeStack = createNativeStackNavigator({
  screens: { Login, Home },
});
