export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    currentPlaying: null,
    token: null,
    // 'BQC_DpisN73dPnSOZueQLx9fFLnTI3rnlJlrNfqrSh6GpNkmiAmTu5iOb7mNkfcyAUwPqnqRyF4QeKhC8vd2TqR_uiaUBK0SiWIE1UzfllqYxwwrKnX-NAcGTikgB01pXZTvAWs3KWtlWN7_kUUNQxp9X9v5CFE',
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
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state
    }
}

export default reducer
