import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    changeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
       

    }
    
    showValue(){
        console.log(this.state.username)
    }

    render() {
        return (
        <form>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.changeHandler}/>
            </div>
            <button onClick={showValue}>click on this</button>
        </form>
        )
    }
}

export default Form;