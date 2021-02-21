export const mainReducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}