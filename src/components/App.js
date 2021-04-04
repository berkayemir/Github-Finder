import React, { useState } from 'react'
import Navbar from './Navbar'
import User from './User'
import Users from './Users'
import axios from 'axios'
import Search from './Search'
import Alert from './Alert'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import About from './About'
import UserDetails from './UserDetails'



const App=()=> {

    const[users,setUsers]=useState([])
    const[user,setUser]=useState({})
    const[alert,setAlert]=useState(null)
    const[repos,setRepos]=useState([])
    
 
            
        
    

   const getUser=(username)=>{
        axios
        .get(`https://api.github.com/users/${username}`)
        .then(res =>{
            setUser(res.data)
        });
    }

   const getUserRepos=(username)=>{
        axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(res=>{
            setRepos(res.data)


        });

    }
    

   
   const clearUsers=()=>{
        setUsers([])
    }

   
    const showAlert=(msg, type)=>{
        setAlert(msg,type)
        
        setTimeout(() =>{
          setState({alert:null});
        },3000);
    }

    
        return (
            <BrowserRouter>
                <Navbar/>
                <Alert alert={alert}/>
                <Switch>
                        <Route exact path="/" render={ props =>(
                                <>
                                <Search 
                                    searchUsers={searchUsers} 
                                    clearUsers={clearUsers} 
                                    showClearButton={users.length > 0 ? true:false} 
                                    setAlert={showAlert}/>
                                <Users users={users}/>

                                </>
                            )
                        }/>

                        <Route path="/about" component={About}/>
                        <Route path="/user/:login" render={props=>(
                            <UserDetails 
                            {...props} 
                            getUser={getUser} 
                            user={user}
                            repos={repos}
                            getUserRepos={getUserRepos} />
                        )}/>
                    
                </Switch>
                
            </BrowserRouter>
        )
    
}

export default App
