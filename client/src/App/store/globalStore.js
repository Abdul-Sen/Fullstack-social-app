//TODO: Imports
import { createStore, combineReducers } from "redux";
import loginReducer from '../reducers/loginReducer';
import commentsReducer from '../reducers/commentsReducer';
import userReducer from '../reducers/userReducer';
import searchReducer from '../reducers/searchReducer';
  export default ()=>{

    const rootReducer = combineReducers({
        commentsReducer,
        loginReducer,
        userReducer,
        searchReducer
      });
          
      //global store
      const globalStore = createStore(rootReducer);

      return globalStore;
  }