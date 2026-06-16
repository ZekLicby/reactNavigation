import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/StackScreens/Screen1";
import { Screen2 } from "../screens/StackScreens/Screen2";

// Navigator do tipo Stack, onde as telas são empilhadas, ou seja, a tela atual é a última tela da pilha e para voltar para a tela anterior basta remover a última tela da pilha. Existem outros tipos de navigator como o Tab, Drawer, etc. Cada um com suas características e funcionalidades específicas.
export const Stack = createStackNavigator({screens:{Screen1, Screen2}});