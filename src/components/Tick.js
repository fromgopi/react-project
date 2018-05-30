import React, {Component} from 'react';

class Tick extends Component{
    render(){
        return(
            <div>
                <h3>It is {new Date().toLocaleString()}</h3>
            </div>
        );
    }
}

export default Tick;