//This is the place where the actions and reducers actually MEET.
//This is what file is talking to our react app.
//That means we need to add the place where our reducers interact and some
//more tools from REACT
import reduxThunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import reducers from "../2-reducers";
export default function configureStore() {
  return createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxThunk)
  );
}
