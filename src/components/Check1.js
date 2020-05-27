import React, {Component} from 'react';


class Check1 extends Component
{
    
    render()
    {

        const {id, name} = this.props.a
        return(
<div>
    <h1> {id} {name}</h1>
</div>

        )
    }

}

export default Check1;