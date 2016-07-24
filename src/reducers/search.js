export function(state = {}, action) {
	switch(action.type) {
		case 'SEARCH':
			console.log('<=====');
			console.log( state );
			//search logic here
			return state;
		break;
		default:
			return state;
	}	
}