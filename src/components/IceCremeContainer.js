import React from 'react'
import { connect } from 'react-redux'
import { buyIceCreme } from '../redux'

function IceCremeContainer(props) {
    return (
        <div>
            <h2>No of ice cremes - {props.noOfIceCremes}</h2>
            <button onClick={props.buyIceCreme}>Buy iceCreme</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        noOfIceCremes:state.iceCreme.noOfIceCremes
    }

}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCreme:()=>dispatch(buyIceCreme())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCremeContainer)
