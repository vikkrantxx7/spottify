import './player.scss'
import { Sidebar } from '../sidebar/sidebar.js'
import { Body } from '../body/body.js'

export const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

Player.propTypes = {
    spotify: PropTypes.object.isRequired,
}

Player.displayName = 'Player'
