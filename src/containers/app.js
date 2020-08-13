import './app.scss'
import { Player } from '../components/player/player.js'
import { useDataLayerValue } from './dataLayer/dataLayer.js'
import Login from '../components/login/login.js'
import SpotifyWebApi from 'spotify-web-api-js'

const App = () => {
    const [{ token }, dispatch] = useDataLayerValue()
    const spotify = new SpotifyWebApi()

    const getUrlHashes = () => {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, part) => {
                const subParts = part.split('=')
                initial[subParts[0]] = decodeURIComponent(subParts[1])
                return initial
            }, {})
    }

    React.useEffect(() => {
        const token2 = getUrlHashes().access_token

        window.location.hash = ''

        if (token2) {
            dispatch({ type: 'SET_TOKEN', token: token2 })
            spotify.setAccessToken(token2)
            spotify.getMe().then((user) => {
                dispatch({ user, type: 'SET_USER' })
            })
        }
    }, [])

    return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>
}

App.displayName = 'Spotify'

export default App
