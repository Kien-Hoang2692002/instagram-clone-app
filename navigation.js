import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LogInScreen from "./screens/LogInScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShow: false,
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
