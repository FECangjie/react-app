import React from 'react';
const List = (props) => {

  const list = props.listItems.map((el, i)=>(
    <li key={i} style={ el.done ? {textDecoration: 'line-through', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'} }
      ><h2 onClick={() => props.onClick(i)}>{el && el.item}</h2>
      <button
        className="btn btn-danger"
        onClick={() => props.onDelete(i)}
        >
        x
      </button>

    </li>
    ));

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
};

export default List;
