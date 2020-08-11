import './app.scss'
import { Player } from '../components/player/player.js'
import Login from '../components/login/login.js'
import SpotifyWebApi from 'spotify-web-api-js'

const App = () => {
    const [token, setToken] = React.useState(null)
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
            setToken(token2)
            spotify.setAcessToken(token2)
        }
    }, [])

    return <div>{token ? <Player /> : <Login />}</div>
}

App.displayName = 'Spotify'

export default App
