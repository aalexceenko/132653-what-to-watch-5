import {combineReducers} from "redux";
import {appProcess} from "./app-process/app-process";
import {user} from "./user/user";


const NameSpace = {
  APP_PROCESS: `APP_PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.USER]: user,
});
