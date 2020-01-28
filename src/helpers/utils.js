export const normalizeArrayByProp = (array, prop) => {
    return array.reduce((obj, item) => {
        obj[item[prop]] = item;
        return obj;
    }, {});
};

export const apiUrl = 'https://stock-app-28541.firebaseio.com/';