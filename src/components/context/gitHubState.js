import React, { useReducer } from "react"
import gitHubReducer from './gitHubReducer'
import gitHubContext from './gitHubContext'

const gitHubState=(props)=>{
    const initialState={
        users:[],
        user:{},
        repos:[]
        
    }
    const[state,dispatch]=useReducer(gitHubReducer,initialState)

const searchUsers=(keyword)=>{
    
        axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res =>{
                setUsers(res.data.items)           
            });
        }

return <gitHubContext.Provider
    
    
            value={{
                users:state.users,
                user:state.user,
                repos:state.repos,
                
                
            }}>
                {props.children}
</gitHubContext.Provider>
}

export default gitHubState