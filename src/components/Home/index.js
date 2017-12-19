import React from 'react';
import List from '../List';
import Form from '../Form';

class Home extends React.Component {

  componentWillMount(){
    this.setState({
      list: [
        {item: '1', done: false },
        {item: '2', done: false },
        {item: '3', done: false },
      ],
      newToDo: 'test'
    })
  }

  onInputChange = (event) => {
    this.setState({ newToDo: event.target.value}); // updates state to new value when user changes the input value
  }

  onInputSubmit = (e) => {
    event.preventDefault()
    this.setState((previousState)=>({
      list: [...previousState.list, {item: previousState.newToDo, done: false } ],
      newToDo: ''
    }))
  }

  onListItemClick = (i) => {
    this.setState((previousState)=>({
      list: [
        ...previousState.list.slice(0, i),
        Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}), ...previousState.list.slice(i+1)
      ]
    }))
  }

  deleteListItem = (i) => {
    this.setState((previousState)=>({ // using previous state again
      list: [
        ...previousState.list.slice(0, i), // again with the slice method
        ...previousState.list.slice(i+1) // the only diffence here is we're leaving out the clicked element
      ]
    }))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>{this.state.newToDo}</h1>
              <hr/>
              <List listItems={this.state.list}
              onClick={this.onListItemClick}
              onDelete={this.deleteListItem}/>
              <Form items={this.state.newToDo} onChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default Home;
