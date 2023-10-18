

const mainuplatedString = (str, callback) => {
    const newString = str.toUpperCase();
    callback(newString);
}

const logString = (newString) => {
    console.log("The mainpulated string is: ", newString);
}
const str = "Hello, World!";
mainuplatedString(str, logString);
