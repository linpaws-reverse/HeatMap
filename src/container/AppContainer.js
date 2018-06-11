import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class AppContainer extends Component {
    render() {
        return (
            <div className="AppContainer">
                <p><Link to="/heatmap">HeatMap</Link></p>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        data : state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch : dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
