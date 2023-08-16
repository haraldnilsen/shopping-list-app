import { Button, Text, View } from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Go back to home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Don't have an account? Sign up here"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;
