//use reducer is an alternative of useState 

import { useReducer } from "react";

// const { useReducer } = require("react");

//it returns an array containing the current state and dispatch function ie:
// const [state, dispatch] = useReducer(reducer, initialState)

// Reducer Function -->A function that takes the current state and an action as arguments, and returns a new state

//initialState -->The initial state value.(The initial state can be a simple value , an object , or even derived from a functon if the initialization is complex.)

//Dispatch function is used to send actions to the reducer,which in turns updates the state based on the action's type and any associated data (payload).



// export function TypeReducer() {
//     const [buttonDisable, setButtonDisabled] = useState(false)

//     const reducer = (state, action) => {
//         //dispatch function sends action and we receive here as a action variable
//         console.log(state, action)
//         if (action.type === "INCREMENT") return state + 1
//         else if (action.type === "DECREMENT") return state - 1
//         else if (action.type === "RESET") return state = 0
//     }

//     const [count, dispatch] = useReducer(reducer, 0)

//     return (
//         <>
//             <div>
//                 <h1>{count}</h1>
//                 <button onMouseDown={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//                 <button disabled={buttonDisable} onMouseDown={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//                 <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
//             </div>
//         </>
//     )
// }

// note: The above useReducer react concept not typescript
//-----------------------------------------------------------------------------------------------//

//modeling states
type CounterState = {
    count: number;
    step: number;
}

//modeling action
type Action =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET", to?: number }




function init(initialCount: number): CounterState {

    return { count: initialCount, step: 1 }

}

function counterReducer(state: CounterState, action: Action): CounterState {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + state.step }
        case "DECREMENT":
            return { ...state, count: state.count - state.step }

        case "RESET":
            return { ...state, count: action.to ?? 0 }
        default:
            return state

    }
}

export function TypeReducer({ initial = 0 }: { initial?: 0 }) {

    const [state, dispatch] = useReducer(counterReducer, initial, init)

    return (
        <>
            <div>
                <p>{state.count}</p>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
                <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            </div>
        </>
    )

}