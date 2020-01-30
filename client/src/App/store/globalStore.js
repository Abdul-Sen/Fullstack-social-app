//TODO: Imports
import { createStore, combineReducers } from "redux";
import loginReducer from '../reducers/loginReducer';

  export default ()=>{

    const rootReducer = combineReducers({
        loginReducer
      });
          
      //global store
      const globalStore = createStore(rootReducer);

      return globalStore;
  }