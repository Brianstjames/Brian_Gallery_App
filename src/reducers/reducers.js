const reducer = (state,action) => {
    //if there is no state, it is the reudcers job to create it
    if(state === undefined){
        state = {
            count: 0
        }
    }

    // if the action.type that was chosen is the increment count
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,           // then we want to use a spread operator (...) to be able to change the state
                count: state.count + action.data    // we are taking the initial count(which is 0 and we set it to that on line 5) and adding to it whatever number we pass into our incrementCount function.
            }
        case "DECREMENT":
            return{
                ...state,
                count: state.count - action.data 
            }
        default:
            return state
    }
}

export default reducer