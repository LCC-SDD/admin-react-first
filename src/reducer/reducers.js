import { REDUCE,ADD } from '../action/actions';
import { combineReducers } from 'redux';
const initialState = {
	arr:['1','2','3']
};

export const addReducer = (state=initialState,action) =>{
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case REDUCE:
			state.arr.pop();
			return Object.assign({},state,{ arr:state.arr });
		case ADD:
			state.arr.push('哈哈');
			return Object.assign({},state,{arr:state.arr});
		default:
		    return state;
	}
}

const reducer = combineReducers({
	addReducer
})

export default reducer;