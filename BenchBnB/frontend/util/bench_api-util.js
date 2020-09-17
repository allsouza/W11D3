export const fetchBenches = (filters) => {
    debugger
    return $.ajax({
        url: "/api/benches",
        error: err => console.log(err),
        data: {bounds: filters}
    })
}