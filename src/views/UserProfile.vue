<template>
  <ContentBase
    ><div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @submit="submit" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div></div
  ></ContentBase>
</template>

<script>
// @ is an alias to /src
import ContentBase from "../components/content";
import UserProfileInfo from "@/components/UserProfileInfo";
import UserProfilePosts from "@/components/UserProfilePosts";
import UserProfileWrite from "../components/UserProfileWrite";
import { reactive } from "vue";
export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfileWrite,
    UserProfilePosts,
  },
  setup() {
    const user = reactive({
      id: 1,
      username: "wujinsheng",
      lastname: "Wu",
      firstname: "Jinsheng",
      followerCount: 1,
      is_followed: true,
    });
    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          user_id: 1,
          title: "title1",
          content: "见天日，见地理，见人情，见世面",
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
        },
        {
          id: 2,
          user_id: 1,
          title: "title2",
          content: "今天天气不错",
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
        },
        {
          id: 3,
          user_id: 1,
          title: "title3",
          content: "我喜欢吃苹果",
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
        },
      ],
    });
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };
    const submit = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        user_id: 1,
        title: "title",
        content: content,
        created_at: "2021-01-01 00:00:00",
        updated_at: "2021-01-01 00:00:00",
      });
    };
    return { user, follow, unfollow, posts, submit };
  },
};
</script>
<style></style>
