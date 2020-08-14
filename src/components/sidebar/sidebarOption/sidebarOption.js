import './sidebarOption.scss'

export const SidebarOption = ({ title, Icon }) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

SidebarOption.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.object.isRequired,
}

SidebarOption.displayName = 'SidebarOption'
