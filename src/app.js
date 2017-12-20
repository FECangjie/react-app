import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
