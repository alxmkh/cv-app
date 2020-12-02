import {InferActionsTypes} from "./store";
import * as _ from 'lodash';

let initialState = {
    firstName: '' as string,
    lastName: '' as string,
    email: '' as string,
    dateOfBirth: null as Date | null,
    gender: '' as GenderType,
    isSave: false
}

type GenderType = 'Male' | 'Female';

const generalReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'CV/SET_GENERAL_INFO':
            return _.merge(state, action.payload);
        case 'CV/GET_GENERAL_INFO':
            return {
                ...state
            }
        case 'CV/EDIT_GENERAL_INFO':
            return _.merge(state, action.payload);
        default:
            return state;
    }
}

export const actions = {
    setGeneralInfo: (firstName:string, lastName: string, email: string, dateOfBirth: Date | null, gender: GenderType, isSave: boolean) => ({
        type: 'CV/SET_GENERAL_INFO', payload:{firstName, lastName, email, dateOfBirth, gender, isSave}} as const),
    getGeneralInfo: () => ({type: 'CV/GET_GENERAL_INFO'} as const),
    editGeneralInfo: (isSave:boolean) => ({type: 'CV/EDIT_GENERAL_INFO', payload: {isSave}} as const),
}

export default generalReducer;
export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;