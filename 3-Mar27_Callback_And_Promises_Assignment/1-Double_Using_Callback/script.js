

const ArrayConversion = (arr, callback) => {
    return callback(arr);
}

const DoubleArray = (arr) => {
    return arr.map((element) => {
        return element * 2;
    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = ArrayConversion(arr, DoubleArray);
console.log(newArray);
