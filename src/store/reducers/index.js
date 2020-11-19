import {combineReducers} from "redux";
import {appProcess} from "./app-process";

const NameSpace = {
  APP_PROCESS: `APP_PROCESS`,
};

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
});
