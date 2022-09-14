//Function to create data context
import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const blogActions = {}
        //will bring/call all the functions to blogAction object to use.
        for (let key in actions) {
            blogActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{ state, ...blogActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider }

}