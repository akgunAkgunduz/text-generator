import React, { Component } from 'react';
import axios from 'axios';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Select from '../components/Select';
import Output from '../components/Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 3,
      format: '',
      text: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  getText() {
    const { paras, format } = this.state;

    axios.get(`https://litipsum.com/api/${paras}/${format}`)
      .then(response => {
        this.setState({ text: response.data });
      });
  }

  handleInputChange(event) {
    this.setState({ paras: event.target.value }, () => this.getText());
  }

  handleSelectChange(event) {
    this.setState({ format: event.target.value }, () => this.getText());
  }

  componentDidMount() {
    this.getText();
  }

  render() {
    const { paras, format, text } = this.state;
    return (
      <div className="app">
        <Heading 
          main={'Text Generator'} 
          sub={'A simple text generator using React and Lit Ipsum API'} 
        />
        <Input name={paras} onChange={this.handleInputChange} />        
        <Select name={format} onChange={this.handleSelectChange} />
        <Output outputText={ text } />    
      </div>
    );
  }
}

export default App;
