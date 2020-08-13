import './player.scss'
import { Body } from '../body/body.js'
import { Footer } from '../footer/footer.js'
import { Sidebar } from '../sidebar/sidebar.js'

export const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

Player.propTypes = {
    spotify: PropTypes.object.isRequired,
}

Player.displayName = 'Player'
