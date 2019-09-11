import React, { Component } from 'react'

class DisplayContainer extends Component {
    constructor(){
        super()

        this.state = {
            value: ""
        }
    }


    render() {
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }

}

export default DisplayContainer