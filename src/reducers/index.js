import { FETCH_START, FETCH_SUCCESS,FETCH_ERROR, ADD_SMURF, SET_ERROR } from "../actions";
import axios from "axios";

export const initialState = { 
    smurfList: [{
        description: "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
        id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name: "Poppa Smurf",
        nickname: "Pops",
        position: "Village Leader"

    },
    {
        description: "Smurfette's role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.",
        id: "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
        name: "Smurfette",
        nickname: "Smurfette",
        position: "Beautician"
    }],
    isAppLoading: false,
    errorMessage: ""
}


const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_START: 
            return {
                ...state,
                isAppLoading: true
            }
        case FETCH_SUCCESS:
             return {
                ...state,
                smurfList: action.payload,
                isAppLoading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                isAppLoading: false,
                errorMessage: action.payload
            }
        case ADD_SMURF: 
        const newSmurf = {...action.payload, id: Date.time}
        axios.post('http://localhost:3333/smurfs', newSmurf)

        return {
            ...state
        }
    case SET_ERROR:
        return {
            ...state,
            errorMessage: action.payload
        }
    default: 
        return state;
}
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.