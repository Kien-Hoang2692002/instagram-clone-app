import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FormiklPostUploader from "./FormiklPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormiklPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://e7.pngegg.com/pngimages/154/787/png-clipart-computer-icons-button-arrow-button-angle-rectangle.png",
        }}
        style={{ width: 50, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
