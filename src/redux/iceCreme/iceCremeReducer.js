import { BUY_ICE_CREME } from "./iceCremeTypes";

const intialState={
    noOfIceCremes:20
}

const iceCremeReducer=(state=intialState,action)=>{
    switch(action.type)
    {
        case BUY_ICE_CREME:
            return{
                ...state,
                noOfIceCremes:state.noOfIceCremes-1
            }
        default:return state
    }

}
export default iceCremeReducer