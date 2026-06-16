import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>FAVORITES BOTTOM TAB</Text>
      <StatusBar style="auto" />
    </View>
  );
};
