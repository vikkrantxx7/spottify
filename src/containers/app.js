import './app.scss'
import Login from '../components/login/login.js'

const App = () => {
    const [token, setToken] = React.useState(null)

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
        }
    }, [])

    return <div>{token ? 'Logged In' : <Login />}</div>
}

export default App
