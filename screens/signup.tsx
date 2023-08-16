import { Button, View } from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Go back to login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Login;
