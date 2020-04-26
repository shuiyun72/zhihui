
export const DataFor = function (num, data) {
    let List = [];
    for (let i = 0; i < num; i++) {
        List.push(...data)
    }
    return List
}