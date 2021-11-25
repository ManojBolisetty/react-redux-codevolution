import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [num,setnum]=useState(1)
    return (
        <div>
            <h2>No of cakes - {props.noOfCakes}</h2>
            <input type="text" value={num} onChange={e=>setnum(e.target.value)} />
            <button onClick={()=>props.buyCake(num)}>Buy {num} Cakes</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        noOfCakes:state.cake.noOfCakes
    }

}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:num=>dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
