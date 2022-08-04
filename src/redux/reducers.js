import {combineReducers} from 'redux';

import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR } from "./actions"


const initialState = {
    getData: {},
    loading: false,
    error: null
}

export const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST_REQUEST:
            return {
                loading: true,
            };
        case GET_FORECAST_SUCCESS:
            return {
                loading: false,
                getData: action.payload
            };

        case GET_FORECAST_ERROR:
            return {
              ...state,
              loading: false,
              data: null,
              error: action.error,
            };
        default:
            return state;
    }
}


export default combineReducers({
    dashboard: DashboardReducer,
  });