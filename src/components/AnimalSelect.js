import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default class AnimalSelect extends Component {

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    this.props.submitAnimal(event.target.value)
  }
  render() {
    return (
      <form id = 'animal-select'>
      <label>Select an Animal: </label>
        <select className='select' onChange={this.handleChange}>
        {
          this.props.animals.map (animal => {
            return (
              <option key={animal} value= {animal}>
              {animal}
              </option>
            )
          })
        }
        </select>
      </form>
  )
}
};

