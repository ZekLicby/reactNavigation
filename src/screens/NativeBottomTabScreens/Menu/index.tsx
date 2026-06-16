import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>MENU BOTTOM TAB</Text>
      <StatusBar style="auto" />
    </View>
  );
};
