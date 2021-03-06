import React from 'react';

import List from 'components/List';
import Form from 'components/Form';

class Home extends React.Component {

  componentWillMount(){
  }

  onInputSubmit = (e) => {
    event.preventDefault()
    debugger
    let list = [...this.props.detail.list, {item: this.props.detail.list.newToDo, done: false }]
    this.props.inputSubmit({ list })

    // this.setState((previousState)=>({
    //   list: [...previousState.list, {item: previousState.newToDo, done: false } ],
    //   newToDo: ''
    // }))
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
    console.log(this.props)
    const {detail, inputChange} = this.props
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>{ detail.newToDo }</h1>
              <hr/>
              <List listItems={ detail.list }
              onClick={this.onListItemClick}
              onDelete={this.deleteListItem}/>
              <Form items={ detail.newToDo } onChange={ (e) => inputChange({newToDo: e.target.value}) } onInputSubmit={this.onInputSubmit}/>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default Home;
