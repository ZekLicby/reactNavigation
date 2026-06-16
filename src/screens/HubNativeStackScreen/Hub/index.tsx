import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Hub = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("NativeStack")}
      >
        <Text style={{ color: "white" }}>Native Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={{ color: "white" }}>Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("BottomTab")}
      >
        <Text style={{ color: "white" }}>Bottom Tab</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
