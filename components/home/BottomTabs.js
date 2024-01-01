import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabsIcon = [
  {
    name: "Home",
    active: require("../../assets/icons/bottomTabIcon/home-active.png"),
    inactive: require("../../assets/icons/bottomTabIcon/home.png"),
  },
  {
    name: "Search",
    active: require("../../assets/icons/bottomTabIcon/search-active.png"),
    inactive: require("../../assets/icons/bottomTabIcon/search.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/icons/bottomTabIcon/reels-active.png"),
    inactive: require("../../assets/icons/bottomTabIcon/reels.png"),
  },
  {
    name: "Shop",
    active: require("../../assets/icons/bottomTabIcon/shop-active.png"),
    inactive: require("../../assets/icons/bottomTabIcon/shop.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/icon.png"),
    inactive: require("../../assets/icon.png"),
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setAvtiveTab] = useState("Home");

  // const Icon = ({ icon }) => (
  //   <TouchableOpacity onPress={() => setAvtiveTab(icon.name)}>
  //   <Image />
  // </TouchableOpacity> />
  // );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => setAvtiveTab(icon.name)}>
            <Image
              source={activeTab === icon.name ? icon.active : icon.inactive}
              style={[
                styles.icon,
                icon.name === "Profile" ? styles.profilePic() : null,
                activeTab === "Profile" && icon.name === activeTab
                  ? styles.profilePic(activeTab)
                  : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 99,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 55,
    paddingTop: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
