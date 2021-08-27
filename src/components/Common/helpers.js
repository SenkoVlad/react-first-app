export const changeStateProp = (items, searchProp, itemId, newProp) => {
    return items.map((item) => {
        if (item[searchProp] === itemId)
            return {
                ...item,
                ...newProp
            }
        return item;
    });
}