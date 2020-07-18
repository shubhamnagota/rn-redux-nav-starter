import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
    userReducer,
});

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
