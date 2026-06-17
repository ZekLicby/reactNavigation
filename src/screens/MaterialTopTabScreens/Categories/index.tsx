import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>MATERIAL TOP TAB</Text>
      <StatusBar style="auto" />
    </View>
  );
};
