import { createStore, combineReducers } from "redux";
import dataReducer from "./Reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer);

export default store;
