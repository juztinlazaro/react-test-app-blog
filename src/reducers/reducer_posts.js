import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';
import { DELETE_POST } from '../actions';

const INITIAL_STATE = {
	all: [],
	post: null,
	status: null
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
		  state = { ...state, all: action.payload.data };
		  return state;
		case FETCH_POST:
		 state = { ...state, post: action.payload.data };
		  return state;
		case DELETE_POST:
		 state = { ...state, status: 'Post is already deleted!' };
		  return state;
		default:
			return state;
	}
}