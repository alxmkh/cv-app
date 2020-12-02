import {InferActionsTypes} from "./store";
import * as _ from 'lodash';
import {companyInfo} from "../Components/Common/types";

let initialState = {
    practicals: [] as Array<companyInfo>,
    isSave: true
}

const practicalReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'CV/SET_COMPANY_INFO':
            return {
                ...state,
                practicals: [...state.practicals, action.payload],
            }

        case 'CV/GET_COMPANY_INFO':
            return {
                ...state
            }
        case 'CV/EDIT_COMPANY_INFO':
            return _.merge(state, action.payload);
        default:
            return state;
    }
}

export const actions = {
    setPracticalExpInfo: (companyName: string, positionTitle: string, mainTasks: string, dateFrom: Date | null, dateTo: Date | null, isSave: boolean) => ({
        type: 'CV/SET_COMPANY_INFO', payload: {companyName, positionTitle, mainTasks, dateFrom, dateTo, isSave}
    } as const),
    getPracticalEpxInfo: () => ({type: 'CV/GET_COMPANY_INFO'} as const),
    editPracticalEpxInfo: (isSave: boolean) => ({type: 'CV/EDIT_COMPANY_INFO', payload: {isSave}} as const),
}

export default practicalReducer;
export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;