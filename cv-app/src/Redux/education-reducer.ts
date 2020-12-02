import {InferActionsTypes} from "./store";
import * as _ from 'lodash';

let initialState = {
    schoolName: '' as string,
    titleOfStudy: '' as string,
    dateOfStudyFrom: null as Date | null,
    dateOfStudyTo: null as Date | null,
    isSave: false
}

const educationReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'CV/SET_EDUCATION_INFO':
            return _.merge(state, action.payload);
        case 'CV/GET_EDUCATION_INFO':
            return {
                ...state
            }
        case 'CV/EDIT_EDUCATION_INFO':
            return _.merge(state, action.payload);
        default:
            return state;
    }
}

export const actions = {
    setEducationInfo: (schoolName:string, titleOfStudy: string, dateOfStudyFrom: Date | null, dateOfStudyTo: Date | null, isSave: boolean) => ({
        type: 'CV/SET_EDUCATION_INFO', payload:{schoolName, titleOfStudy, dateOfStudyFrom, dateOfStudyTo, isSave}} as const),
    getEducationInfo: () => ({type: 'CV/GET_EDUCATION_INFO'} as const),
    editEducationInfo: (isSave:boolean) => ({type: 'CV/EDIT_EDUCATION_INFO', payload: {isSave}} as const),
}

export default educationReducer;
export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;