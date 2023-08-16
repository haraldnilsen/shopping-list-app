import { Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Go to my login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default HomeScreen;
