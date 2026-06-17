import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Hub } from "../screens/HubNativeStackScreen/Hub";
import { NativeStack } from "./nativeStack";
import { Stack } from "./stack";
import { BottomTabs } from "./bottomTabs";
import { NativeBottomTabs } from "./nativeBottomTabs";
import { Drawer } from "./drawer";

// Navigator do tipo Stack, onde as telas são empilhadas, ou seja, a tela atual é a última tela da pilha e para voltar para a tela anterior basta remover a última tela da pilha. Existem outros tipos de navigator como o Tab, Drawer, etc. Cada um com suas características e funcionalidades específicas.
const RootStack = createNativeStackNavigator({
  screens: {
    Hub,
    NativeStack: { screen: NativeStack, options: { headerShown: false } },
    Stack: { screen: Stack, options: { headerShown: false } },
    BottomTabs: { screen: BottomTabs, options: { headerShown: false } },
    NativeBottomTabs: {
      screen: NativeBottomTabs,
      options: { headerShown: false },
    },
    Drawer:{screen: Drawer, options: { headerShown: false }},
  },
  initialRouteName: "Hub",
});

// Navegação - estática
//Existem estática e dinâmica, a estática é aquela onde as telas são definidas de forma fixa, ou seja, não é possível adicionar ou remover telas em tempo de execução. Já a dinâmica é aquela onde as telas podem ser adicionadas ou removidas em tempo de execução, ou seja, é possível criar uma navegação mais flexível e adaptável às necessidades do usuário.
export const Navigation = createStaticNavigation(RootStack);
