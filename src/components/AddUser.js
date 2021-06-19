import React, { useState } from "react";
import { userContext } from "../contexts/UserContext";
import { v4 as uuidv4 } from 'uuid';


export default function AddUser() {
  const [visible, setvisible] = useState(false);
  const toggleVisibility = () => {
    setvisible(!visible);
  };

  const [userInfo, setuserInfo] = useState({
    id:uuidv4(),
    name: "",
    department: "",
    salary: "",
  });

  const handleAddItem = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const addNewUser = (dispatch, e) => {
    e.preventDefault();
    setuserInfo({ ...userInfo, id: uuidv4()});

    dispatch({ type: "ADD_USER", payload: userInfo });
    console.log(userInfo)
  };

  return (
    <userContext.Consumer>
      {(value) => {
        const {dispatch} = value
        return (
          <React.Fragment>
            <button onClick={toggleVisibility} className="btn btn-warning mb-2">
              {visible ? "Hide Form" : "Show Form"}
            </button>
            {visible ? (
              <div className="card">
                <div className="card-header">Add New User</div>
                <div className="card-body">
                  <form onSubmit={addNewUser.bind(this, dispatch)}>
                    <input
                      onChange={handleAddItem}
                      className="form-control mb-3"
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      onChange={handleAddItem}
                      className="form-control mb-3"
                      type="text"
                      placeholder="Department"
                      name="department"
                    />
                    <input
                      onChange={handleAddItem}
                      className="form-control mb-3"
                      type="text"
                      placeholder="Salary"
                      name="salary"
                    />
                    <button className="btn btn-primary" type="submit">
                      Add User
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        );
      }}
    </userContext.Consumer>
  );
}
