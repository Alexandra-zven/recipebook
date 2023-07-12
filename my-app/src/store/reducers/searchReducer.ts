import {Action, ActionType} from "./reducers.types";

export default function searchReducer(state = {}, action: Action){
    switch (action.type) {
        case ActionType.ACTION_ADD_SEARCH_RESULT: return {};
        case ActionType.ACTION_REMOVE_SEARCH_RESULT: return {};
        default: return state;
    }
}