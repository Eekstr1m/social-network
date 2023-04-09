import axios from "axios";
import React, { useEffect, useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import Post from "../Post/Post";
import c from "./PostsList.module.scss";

function PostsList({ profileData, inputMsg, setInputMsg }) {
  const [postsList, setPostsList] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts/user/5").then((res) => {
      setPostsList(res.data.posts);
    });
  }, []);

  useEffect(() => {
    if (postsList && inputMsg !== "") {
      let copy = structuredClone(postsList);
      copy.unshift({
        id: postsList.length + 1,
        title: inputMsg,
        reactions: 0,
      });
      setPostsList(copy);
    }

    return () => {
      setInputMsg("");
    };
  }, [inputMsg]);

  return (
    <div className={c.postsList}>
      {postsList ? (
        postsList.map((item) => (
          <Post
            key={item.id}
            message={item.title}
            like={item.reactions}
            userName={profileData.fullName}
          />
        ))
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default PostsList;
