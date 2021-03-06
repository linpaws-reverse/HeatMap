import React , {Component} from 'react'
import HeatMap from "../components/HeatMap";
import Tooltip from 'react-tooltip'
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import BulletChart from "../components/BulletChart";

class HeatMapContainer extends Component {
    constructor(props){
        super(props)
        this.state =  {
            rowData: [
                {
                    "title":"Efficiency",
                    "ranges":[30,60,100],
                    "measures":[0,0],
                    "markers":[10]
                }
            ]
        }
    }

    rowSelection = (d) =>{
        let efficiency = (24-d) / 24 * 100
        this.setState({
            rowData :
                {
                    "title":"Efficiency",
                    "ranges":[30,60,100],
                    "measures":[efficiency,efficiency],
                    "markers":[10]
                }
        })
    }

    render() {
        return (
            <div>
                <p><Link to="/home">Home</Link></p>
                <div style={{display:'flex'}}>
                    <div>
                        <HeatMap rowSelection={this.rowSelection}
                                 data={this.props.data ? this.props.data.toJS() : {}}/>

                        <Tooltip id="heatmap-cell" event="mouseover" eventOff="mouseout" class="extra" html={true}/>
                    </div>
                    <div style={{marginTop:'5%'}}>
                        <BulletChart data={this.state.rowData}/>
                    </div>
                </div>
            </div>
            )
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
export default connect(mapStateToProps, mapDispatchToProps)(HeatMapContainer);
