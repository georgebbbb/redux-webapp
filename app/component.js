import React from 'react';
import Word from './Word'

export default class Hello extends React.Component {
  render() {
    return (<h1>He  ss llo worl
              <span>222</span>
              <div>44</div>
              <Word></Word>
              <Word></Word>
              <Word></Word>
              <Word></Word>
              <Word test={"666"}></Word>
            </h1>);
  }
}
