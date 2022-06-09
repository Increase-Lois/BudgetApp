const initialState={
    budgetState: [],
    budgetAmount:1000
}


export const budgetReducer = (state = initialState, action) =>{     //action is the dispatch encapsulated
    switch(action.type){
        case "SET_BUDGET":
            return { ...state, budgetState:action.payload}

        case "ADD_TO_BUDGET":
            return{
                ...state,
                budgetState: [...state.budgetState, action.payload], 
                budgetAmount:state.budgetAmount - action.payload?.budgetAmount}

        case "UPDATE_BUDGET":
            return{
                ...state,
                budgetState:state.budgetState.map((item) =>
                    item.id === action.payload.id ?
                        action.payload : item)
            }

        case "DELETE_BUDGET":
                return{
                    ...state,
                    budgetState:state.budgetState.filter((item,index) => index !== action.payload?.id),
                    budgetAmount:+state.budgetAmount + +action.payload?.amount
                }
        
        // case 
                default:
                    return state
    }
}


// This budgetReducer is what is in the store