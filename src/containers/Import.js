// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, deleteMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: (index) => dispatch(fetchMakes(index)),
        deleteMakes: (index) => dispatch(deleteMakes(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)