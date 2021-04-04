const gitHubReducer=(state,aciton)=>{
    switch(aciton.type){
        case "SEARCH_USER":
        return{
            ...state,
            users:action.payload

        }
        case "SET_LOADING":
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}