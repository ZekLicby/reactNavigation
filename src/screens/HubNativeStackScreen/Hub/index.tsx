import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Hub = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NativeStack")}
      >
        <Text style={{ color: "white" }}>Native Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={{ color: "white" }}>Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BottomTabs")}
      >
        <Text style={{ color: "white" }}>Bottom Tab</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NativeBottomTabs")}
      >
        <Text style={{ color: "white" }}>Native Bottom Tab</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Drawer")}
      >
        <Text style={{ color: "white" }}>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};
