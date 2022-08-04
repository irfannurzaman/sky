import api from "../request";


export const SET_FORECAST_PARAMS = "SET_FORECAST_PARAMS";
export const GET_FORECAST_REQUEST = "GET_FORECAST_REQUEST";
export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_ERROR = "GET_FORECAST_ERROR";



export const getDataActions = (value) => async (dispatch) => {
    dispatch({
        type: GET_FORECAST_REQUEST,
      });
    try {
        const { data } = await api.dashboard.getData()
        dispatch({
            type: GET_FORECAST_SUCCESS,
            payload: data
          });
        
    } catch (error) {
        dispatch({
            type: GET_FORECAST_ERROR,
            error,
          });
    }
}