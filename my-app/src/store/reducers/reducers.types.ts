export enum ActionType {
    ACTION_ADD_SEARCH_RESULT = "ACTION_ADD_SEARCH_RESULT",
    ACTION_REMOVE_SEARCH_RESULT = "ACTION_REMOVE_SEARCH_RESULT"
}

interface actionAddSearchResult {
    type: ActionType.ACTION_ADD_SEARCH_RESULT,
    payload: string
}

interface actionRemoveSearchResult {
    type: ActionType.ACTION_REMOVE_SEARCH_RESULT,
    payload: string
}

export type Action = actionAddSearchResult | actionRemoveSearchResult;



