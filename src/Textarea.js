import React, { Component } from 'react';
import './Textarea.css';
var marked = require('marked');


class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      mark: ""
    };
    this.handleTextarea = this.handleTextarea.bind(this);
  }

  handleTextarea(event) {
    this.setState({
      text: event.target.value,
      mark: marked(event.target.value)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <textarea value={this.state.text} name="textarea" rows="25" cols="65" onChange={this.handleTextarea}></textarea>
          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{__html: this.state.mark}}  />
          </div>
        </div>
      </div>
    );
  }
}

export default Textarea;

