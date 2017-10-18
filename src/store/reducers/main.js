import {setMammal, setBird, setFish} from '../action-creators/actions'

const mammals = ['Tiger', 'Panda', 'Pig'];
const birds = ['Eagle', 'Flamingo', 'Penguin'];
const fish = [ 'Seahorse', 'Octopus', 'Stingray'];


const initialState = {
	selectedMammal : "Tiger",
	selectedBird : "Eagle",
	selectedFish : "Seahorse",
	mammals,
	birds,
	fish
	};

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {

switch(action.type){

	case 'SET_MAMMAL': {
		return {
			selectedMammal: action.animal,
			selectedBird: initialState.selectedBird,
			selectedFish: initialState.selectedFish,
			mammals: initialState.mammals,
			birds: initialState.birds,
			fish: initialState.fish
		}
	}
	case 'SET_BIRD': {
		return {
			selectedMammal: initialState.selectedMammal,
			selectedBird: action.animal,
			selectedFish: initialState.selectedFish,
			mammals: initialState.mammals,
			birds: initialState.birds,
			fish: initialState.fish
		}
	}
	case 'SET_FISH': {
		return {
			selectedMammal: initialState.selectedMammal,
			selectedBird: initialState.selectedBird,
			selectedFish: action.animal,
			mammals: initialState.mammals,
			birds: initialState.birds,
			fish: initialState.fish
		}
	}
	default:
		return initialState;
}
};
