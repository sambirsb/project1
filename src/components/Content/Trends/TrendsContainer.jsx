import { connect } from 'react-redux'
import Trends from './Trends'

let mapStateToProps = (state) => {
    return {
        trend: state.TrendsPage.trendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

let TrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Trends)


export default TrendsContainer