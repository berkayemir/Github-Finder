import React,{useEffect,useReducer} from 'react'
import ReactDOM from 'react-dom'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NoteContext from '../context/note-context'


const NoteApp=()=>{
    const [notes,dispatch]= useReducer(notesReducer,[])


    useEffect(()=>{
        const notesData=JSON.parse(localStorage.getItem('notes'))
        if(notes){
            dispatch({type:'POPULATE_NODES',notes:notesData})
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])




    return(
        <NoteContext.Provider value={{notes,dispatch}}>
        <div className="container p-5">
            <div className="card mb-3">
                <div className="card-header">Notes</div>
                {
                    notes &&(
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                {
                                    
                                    <NoteList />
                                    
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            <div className="card mb-3">
                <div className="card-header">Add a New Note</div>
                <div className="card-body">
                    <AddNoteForm />
                </div>
            </div>

        </div>
    </NoteContext.Provider>   
    )
    
}

export default NoteApp
