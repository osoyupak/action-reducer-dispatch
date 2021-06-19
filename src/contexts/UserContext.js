import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const userContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload!==user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users,action.payload]
            }
            default:
                return state
    }
}

export class UserContextProvider extends Component {
    
    state=  {users: [
        {id: uuidv4(), name: "Ozan", department: "Industrial design", salary: 7500},
        {id: uuidv4(), name: "İlayda", department: "Architecture", salary: 8500},
        {id: uuidv4(), name: "Paşa", department: "Entertainment", salary: 250}],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }     

    render() {
        return (

            <userContext.Provider value={this.state}>
                {this.props.children}
            </userContext.Provider>

        )
    }
}
