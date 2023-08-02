import React, { useState }  from "react";

import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  
  // const HandleClick = () => {
  //   setTitle('Updated!');
  //   console.log(title)
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={HandleClick}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
