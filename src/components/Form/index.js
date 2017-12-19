import React from 'react';
const Form = (props) => {

  const val = props.items

  return (
  <div
    className="form-group">
    <label
      htmlFor="listInput">
      Email address
    </label>
    <input
      type="text"
      className="form-control"
      id="listItemInput"
      placeholder="Add new todo"
      onChange={props.onChange}
    />
    <button
      className="btn btn-primary"
      onClick={props.onInputSubmit}>
      Add Item
    </button>

  </div>
  )
};

export default Form;
