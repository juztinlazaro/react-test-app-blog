import { FETCH_POSTS } from '../actions';

const INITIAL_STATE = {
	all: [],
	post: null,
	error: []
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
		  state = { ...state, all: action.payload.data };
		  return state;
		default:
			return state;
	}
}