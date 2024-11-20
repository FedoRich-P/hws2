const initState = {
    isLoading: false,
}

type InitialState = typeof initState

export const loadingReducer = (state: InitialState = initState, action: Action): InitialState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as LoadingActionType)

type Loading = ReturnType<typeof loadingAC>

type Action = Loading