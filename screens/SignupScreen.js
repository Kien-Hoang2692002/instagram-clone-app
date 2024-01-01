import { View, StyleSheet, Image } from "react-native";
import SignupForm from "../components/signup/SignupForm";
const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 100, height: 100 }}
      />
    </View>
    <SignupForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
