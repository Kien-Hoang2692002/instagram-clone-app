import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const PostFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../../assets/icons/heart.png"),
    likedImageUrl: require("../../assets/icons/heart-red.png"),
  },
  {
    name: "Comment",
    imageUrl: require("../../assets/icons/comment.png"),
  },
  {
    name: "Share",
    imageUrl: require("../../assets/icons/share.png"),
  },
  {
    name: "Save",
    imageUrl: require("../../assets/icons/save.png"),
  },
];

// const PostFooterIcons = [
//   {
//     name: "Like",
//     imageUrl: "../../assets/icons/heart.png",
//     likedImage: "../../assets/icons/heart-red.png",
//   },
//   {
//     name: "Comment",
//     imageUrl: "../../assets/icons/comment.png",
//   },
//   {
//     name: "Share",
//     imageUrl: "../../assets/icons/share.png",
//   },
//   {
//     name: "Save",
//     imageUrl: "../../assets/icons/save.png",
//   },
// ];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={PostFooterIcons[0].imageUrl} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={PostFooterIcons[1].imageUrl} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={PostFooterIcons[2].imageUrl} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={PostFooterIcons[3].imageUrl} />
      </TouchableOpacity>
    </View>
  </View>
);

// const Icon = ({ imgStyle, imgUrl }) => (
//   <TouchableOpacity>
//     <Image style={imgStyle} source={require(imgUrl)} />
//   </TouchableOpacity>
// );

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text>
        {"   "}
        {post.caption}
      </Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },

  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
