import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import App from '../App'
import HeatMapContainer from "../container/HeatMapContainer";

const routeConfig = (store) => (
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route exact path = "/" component={App}/>
                <Route path = "/home" component={App}/>
                <Route path = "/heatmap" component={HeatMapContainer}/>
            </div>
        </BrowserRouter>
    </Provider>
)

export default routeConfig