import {combineReducers} from 'redux';
import { productReducer } from '../reducer/func'

const rootReducer = combineReducers(
    {
        product : productReducer
    }
    );
  
export default rootReducer;