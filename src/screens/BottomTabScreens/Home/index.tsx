import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOME BOTTOM TAB</Text>
      <StatusBar style="auto" />
    </View>
  );
};
