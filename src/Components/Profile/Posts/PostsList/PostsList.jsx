import axios from "axios";
import React, { useEffect, useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import Post from "../Post/Post";
import c from "./PostsList.module.scss";

function PostsList(props) {
  const [postsList, setPostsList] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts/user/5").then((res) => {
      setPostsList(res.data.posts);
    });
  }, []);

  useEffect(() => {
    if (postsList && props.inputMsg !== "") {
      let copy = structuredClone(postsList);
      copy.unshift({
        id: postsList.length + 1,
        title: props.inputMsg,
        reactions: 0,
      });
      setPostsList(copy);
    }

    return () => {
      props.setInputMsg("");
    };
  }, [props.inputMsg]);

  return (
    <div className={c.postsList}>
      {postsList ? (
        postsList.map((item) => (
          <Post key={item.id} message={item.title} like={item.reactions} />
        ))
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default PostsList;
