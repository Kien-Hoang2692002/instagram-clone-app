import { View, Text, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/users";
import { ScrollView } from "react-native-web";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.story} />;
              <Text style={{ color: "white" }}>
                {story.users.length > 11
                  ? story.users.slice(0, 10).toLowerCase() + "..."
                  : story.users.toLowerCase()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
