import React, { Component } from "react";
import appConfig from './appConfig';

class Rules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rules: []
    }
  }
  componentDidMount() {
    fetch(appConfig.ruleUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rules: data.rules
        })
      });
  }
  render() {
    return <div>
      <ul>
        {this.state.rules.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  }
}

export default Rules;