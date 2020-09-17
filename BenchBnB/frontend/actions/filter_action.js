import { fetchBenches } from "./bench_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const updateBoundsAction = bounds => {
    return({
        type: UPDATE_BOUNDS,
        bounds
    })
}

export const updateBounds = (bounds) => {
    return (dispatch) => {
        dispatch(updateBoundsAction(bounds));
        return fetchBenches(bounds)(dispatch);
    }
}