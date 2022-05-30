import React  from 'react'; //use rcc snippet.
import './SLDC_home.css'
import Submit from './Submit'

// this is the sldc home page.
// it will have 3 branch components.
// show active,show pending,update ip(del:active or add:new),

class SLDC_home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(

        <>
            <div>
                SLDC HOME
                <br/>
                <p>welcome user : {this.props.user}</p>
                <br />
                <Submit />
            </div>
        </>
        
        )
    }
}



export default SLDC_home ;