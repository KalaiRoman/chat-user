import { combineReducers } from "redux";
import Tokenreducer from './Token_reducer.js';
import SingleUserreducer from './Singleuser_reducer.js';
import Alluserreducer from './Alluser_reducer.js';
import UserChatMessagereducer from './Chatmessage_reducer.js'
const RootReducer = combineReducers({
    login: "loginReducer",
    token: Tokenreducer,
    singleuser: SingleUserreducer,
    allusers: Alluserreducer,
    userchat: UserChatMessagereducer
});

export default RootReducer;