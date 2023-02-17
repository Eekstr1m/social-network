import { combineReducers, legacy_createStore as createStore } from "redux";
import messagesPageReducer from "./Reducers/messagesPage-reducer";
import profilePageReducer from "./Reducers/profilePage-reducer";
import sidebarLinksReducer from "./Reducers/sidebarLinks-reducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  sidebarLinks: sidebarLinksReducer,
});

let store = createStore(reducers);

export default store;
