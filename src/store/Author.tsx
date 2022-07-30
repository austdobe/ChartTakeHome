export const Author = (state:String, action:String) =>{
    switch (action) {
        case "setAuthor":
          return {
            ...state,
            Authors: state
          }
    
        default:
          return state
    } 
}
export const initialState = {
    Authors: []
  }