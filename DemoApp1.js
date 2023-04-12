import React from 'react'

class DemoApp1 extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
            'firstName': 'ngoc',
            'lastName': 'uyen'
        }
    }
     
    changeFn = () => {
        this.setState({'firstName' : 'nguyen2'})
    }

    changeLn = () => {
        this.setState({'lastName': 'Ngoc2'})
    }
    render() {
        return (
            <>
            <h1>WELCOME TO MY COMPONENT{this.state.firstName} {this.state.lastName}</h1>
            <input type='button' onClick={this.changeFn} value='Change First Name'/>
            <input type='button' onClick={this.changeLn} value='Change Last Name'/>
            </>
        )
    }
}

export default DemoApp1