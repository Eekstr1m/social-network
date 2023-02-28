import { connect } from "react-redux";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../Redux/Reducers/profilePage-reducer";
import NewPost from "./NewPost";

// function NewPostContainer(props) {
//   // let state = props.store.getState();

//   // let addPost = () => {
//   //   props.store.dispatch(addNewPostActionCreator());
//   // };

//   // let postChange = (text) => {
//   //   props.store.dispatch(updateNewPostTextActionCreator(text));
//   // };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addNewPostActionCreator());
//         };

//         let postChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         return (
//           <NewPost
//             addPost={addPost}
//             updateNewPostText={postChange}
//             addNewPostText={state.profilePage.addNewPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    addNewPostText: state.profilePage.addNewPostText,
  };
};

let mapDispatchToProps = {
  addPost: addNewPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
