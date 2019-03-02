import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ADD_MODEL } from './actions/addModel'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}


class App extends Component {
  state = {}

   updateSelection = (event) => {
    this.setState({ value: event.target.value })
    console.log(this.state)
  }
  handleSubmit =(event) => {
    event.preventDefault()
    
  }
  addModel = () => {
    this.props.addModel()
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>  
          <select onChange={this.updateSelection}>
              <option>--pick a model--</option>
              {Object.keys(data).map(model =>
              <option key={model} value={model}>{model} ({data[model].year})</option>)}
          </select>
          <input onClick={() => this.addModel} type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    model: ''
  }
}

export default connect(mapStateToProps, { ADD_MODEL })(App)

