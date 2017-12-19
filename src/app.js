import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

class App extends React.Component {
  render(){
    return(<Home>
        Hello World
      </Home>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
