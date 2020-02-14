export const normalizeArrayByProp = (array, prop) => {
    if (!array) {
        return;
    }
    return array.reduce((obj, item) => {
        if (item) {
            obj[item[prop]] = item;
        }
        return obj;
    }, {});
};

export const apiUrl = 'https://stock-app-28541.firebaseio.com/';