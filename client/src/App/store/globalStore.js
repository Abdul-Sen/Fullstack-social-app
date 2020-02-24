//TODO: Imports
import { createStore, combineReducers } from "redux";
import loginReducer from '../reducers/loginReducer';
import commentsReducer from '../reducers/commentsReducer';

  export default ()=>{

    const rootReducer = combineReducers({
        commentsReducer,
        loginReducer
      });
          
      //global store
      const globalStore = createStore(rootReducer);

      return globalStore;
  }