import * as BenchApi from '../util/bench_api-util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";
export const RECEIVE_BENCH_ERRORS = "RECEIVE_BENCH_ERRORS";
export const RECEIVE_NEW_BENCH = "RECEIVE_NEW_BENCH";

const receiveAllBenches = benches => {
    return ({
        type: RECEIVE_ALL_BENCHES,
        benches
    })
}

const receiveNewBench = bench => {
    return({
        type: RECEIVE_NEW_BENCH,
        bench
    })
}

const receiveBenchErrors = errors => {
    return ({
        type: RECEIVE_BENCH_ERRORS,
        errors
    })
}

export const fetchBenches = (bounds) => dispatch => {
    debugger
    return(BenchApi.fetchBenches(bounds)
    .then(benches => dispatch(receiveAllBenches(benches)), 
        errors => dispatch(receiveBenchErrors(errors))))
}

export const createBench = bench => dispatch => {
    return(
        BenchApi.createBench(bench)
        .then(bench => dispatch(receiveNewBench(bench)), 
        errors => dispatch(receiveBenchErrors(errors)))
    )
}