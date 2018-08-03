
import { FETCH_IMAGES} from "../Actions/Constants";

const initialState = {
  
}

export default function images(state = initialState, action){
  switch (action.type) {
    case "FETCH_IMAGES":
      
      return action.payload; 
    
    default:
      return state;
  }
};