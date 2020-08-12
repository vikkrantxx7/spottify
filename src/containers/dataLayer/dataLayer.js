const DataLayerContext = React.createContext(null)

export const useDataLayerValue = () => React.useContext(DataLayerContext)

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={React.useReducer(reducer, initialState)}>{children}</DataLayerContext.Provider>
)

DataLayer.propTypes = {
    initialState: PropTypes.object.isRequired,
    reducer: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

DataLayer.displayName = 'DataLayer'
