import React from 'react';
import word from  './Word.css'
export default class Hello extends React.Component {
  render() {
    const test = this.props;
    console.log(test);
    return (<span className="word">He  ss llo            </span>);
  }
}
