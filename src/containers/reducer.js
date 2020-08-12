export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    currentPlaying: null,
    token:
        'BQC_DpisN73dPnSOZueQLx9fFLnTI3rnlJlrNfqrSh6GpNkmiAmTu5iOb7mNkfcyAUwPqnqRyF4QeKhC8vd2TqR_uiaUBK0SiWIE1UzfllqYxwwrKnX-NAcGTikgB01pXZTvAWs3KWtlWN7_kUUNQxp9X9v5CFE',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        default:
            return state
    }
}

export default reducer
