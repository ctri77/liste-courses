import { combineReducers } from 'redux';
import AjoutReducers from './ajout';

const allReducers = combineReducers({
    ajout: AjoutReducers,

})

export default allReducers;