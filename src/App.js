import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  render(){
    let {squares} = this.state
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="grid">
          {squares.map((value, index) => {   
            return(
              <Square 
                value={value}
                key={index}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
