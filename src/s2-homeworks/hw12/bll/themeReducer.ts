type InitialState = {
    themeId: number
}

const initState: InitialState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeId): InitialState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id,
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): {type: string, id: number} => ({ type: 'SET_THEME_ID', id }) // fix any

type ChangeThemeId = ReturnType<typeof changeThemeId>