import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import educationReducer from "./education-reducer";
import generalReducer from "./general-reducer";
import practicalReducer from "./practical-reducer";


let rootReducer = combineReducers({
    generalReducer: generalReducer,
    educationReducer: educationReducer,
    practicalReducer: practicalReducer
})

// Create type for all reducers.
type RootReducerType = typeof rootReducer;

// Create type for all state.
export type AppStateType = ReturnType<RootReducerType>

// Create type for all actions.
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// Create type for thunks.
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// Add DevTools.
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
