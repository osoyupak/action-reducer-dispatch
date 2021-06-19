import React from "react";
import { userContext } from "../contexts/UserContext";
import User from "./User";

export default function UserList() {
  return (
    <userContext.Consumer>
        {contextUser => {
            const {users} = contextUser;
            return (
                users.map((user)=> 
                    <User 
                        key = {user.id}
                        id= {user.id}
                        name = {user.name}
                        department = {user.department}
                        salary = {user.salary}
                    />
                )
            )
        }}
    </userContext.Consumer>

  );
}
