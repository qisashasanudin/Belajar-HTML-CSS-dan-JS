const capitalizeString = str => str.toUpperCase();

const capInitial = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {capitalizeString};
export {capInitial};
export const foo = "bar";
export const bar = "foo";