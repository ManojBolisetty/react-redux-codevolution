import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCremeReducer from "./iceCreme/iceCremeReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCreme:iceCremeReducer
})

export default rootReducer