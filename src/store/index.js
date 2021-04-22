import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import deck from "./deck";
import player from "./player";
import tournament from "./tournament";

const reducer = combineReducers({
  deck,
  player,
  tournament,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./deck";
export * from "./player";
export * from "./tournament";
