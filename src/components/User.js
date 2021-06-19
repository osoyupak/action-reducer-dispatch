import React, { useState } from "react";
import { userContext } from "../contexts/UserContext";

export default function User({ id, name, department, salary }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleClick = (e) => {
    if (e.target.className !== "far fa-trash-alt") {
      setIsCollapsed(!isCollapsed);
    }
  };

  const onDeleteUser = (dispatch, e) => {
    dispatch({type:"DELETE_USER", payload: id})
  }

  return (
    <userContext.Consumer>
      {(value) => {
        const {dispatch} = value
        return (
           <div className="card mt-3" style={ isCollapsed?null:{background:"blue"}}>
            <div
              onClick={handleClick}
              className="card-header d-flex justify-content-between"
            >
              <h3>{name}</h3>
              <h3>
                <i onClick={onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt"></i>
              </h3>
            </div>
            {isCollapsed ? null : (
              <div className="card-body">
                <p className="card-text">Department: {department}</p>
                <p className="card-text">Salary: {salary}</p>
              </div>
            )}
          </div>
        );
      }}
    </userContext.Consumer>
  );
}
