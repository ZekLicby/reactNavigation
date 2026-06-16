import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity style={{backgroundColor: "blue", padding: 10, borderRadius: 5}} onPress={() => navigation.navigate("Screen2")}>
        <Text style={{color: "white"}}>IR PARA SCREEN2</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
