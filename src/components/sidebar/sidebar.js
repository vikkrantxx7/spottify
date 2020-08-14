import './sidebar.scss'
import { SidebarOption } from './sidebarOption/sidebarOption.js'
import { useDataLayerValue } from '../../containers/dataLayer/dataLayer.js'
import HomeIcon from '@material-ui/icons/Home'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import SearchIcon from '@material-ui/icons/Search'

export const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo"
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => {
                return <SidebarOption key={playlist.id} title={playlist.name} />
            })}
        </div>
    )
}

Sidebar.displayName = 'Sidebar'
