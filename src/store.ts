import { createStore } from "redux";
import rootReduxer from "./reducers";

const store = createStore(rootReduxer);

export type RootState = ReturnType<typeof store.getState>;

export default store; 