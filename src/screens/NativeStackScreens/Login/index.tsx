import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity style={{backgroundColor: "blue", padding: 10, borderRadius: 5}} onPress={() => navigation.navigate("Home")}>
        <Text style={{color: "white"}}>IR PARA HOME</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
