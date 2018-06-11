import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import App from '../App'
import HeatMap from "../components/HeatMap";
import HeatMapContainer from "../container/HeatMapContainer";

const routeConfig = (store) => (
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route path = "/" component={App}/>
                <Route path = "/heatmap1" component={HeatMap}/>
                <Route path = "/heatmap" component={HeatMapContainer}/>
            </div>
        </BrowserRouter>
    </Provider>
)

export default routeConfig