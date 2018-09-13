////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// Implement a radio group form control with the API found in <App>.
//
// - The RadioOption should render with the initial selected item in state
// - Clicking a <RadioOption> should update the state in the App
//
// . https://drive.google.com/file/d/1iTQAEunSbwnB-QUS0pVRwDKiAg5yVh1L/view?usp=sharing
////////////////////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const radioOptions = [
  {
    id: 1,
    value: "AM"
  },
  {
    id: 2,
    value: "FM"
  },
  {
    id: 3,
    value: "Tape"
  },
  {
    id: 4,
    value: "Aux"
  }
];

// --------------------------
// App component
// --------------------------

class SquareRadioBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    let cssClass = 'checkbox ' + (this.props.selected ? 'selected' : '');
    return (
      <div data-attr={this.props.id}>
        <div className={cssClass}/><label>{this.props.title}</label>
      </div>
    );
  }
}

class RadioGroup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      radioGroup: props.RadioGroup
    }
  }
  generateRadioButtons(items) {
    let res = [];
    for (let item in items) {
      let selected = (items[item].selected ? items[item].selected.toString() : '');
      
      res.push(
        <SquareRadioBtn 
          id={items[item].id} 
          title={items[item].value} 
          selected={selected} 
          onClick={() => this.selectOption(items[item])}
        />
      );
    }
    return res;
  }
  selectOption = (item) => {
    item.selected = !item.selected;

    for (item in this.state.radioGroup) {
      if (this.state.radioGroup[item].selected === true) {
        this.state.radioGroup[item].selected = false;
      }
    }
  }
  render () {
    const radios = this.generateRadioButtons(this.state.radioGroup)
    return (
      <div>
        {radios}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ It's about time that we all turned off the radio ♫</h1>
        <RadioGroup 
          radioGroup={radioOptions}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
