import './footer.scss'
import { Grid, Slider } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import RepeatIcon from '@material-ui/icons/Repeat'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="" alt="album logo"></img>
                <div className="footer__songInfo">
                    <h4>Yeah</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container={true} spacing={2}>
                    <Grid item={true}>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item={true}>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item={true} xs={true}>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

Footer.displayName = 'Footer'
