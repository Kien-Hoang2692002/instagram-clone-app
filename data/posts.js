import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg",
    user: USERS[0].users,
    likes: 7870,
    caption: "Test caption",
    profile_picture: USERS[0].image,
    comments: [
      {
        users: "thequzman",
        comment: "Wow",
      },
      {
        users: "Jonathan123",
        comment: "Đắng cấp đấy",
      },
    ],
  },
  {
    imageUrl:
      "https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg",
    user: USERS[1].users,
    likes: 8000,
    caption: "Test caption2",
    profile_picture: USERS[1].image,
    comments: [
      {
        users: "thequzman",
        comment: "Quá tuyệt vời",
      },
    ],
  },
];
