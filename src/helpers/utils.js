export const normalizeArrayByProp = (array, prop) => {
    return array.reduce((obj, item) => {
        obj[item[prop]] = item;
        return obj;
    }, {});
};