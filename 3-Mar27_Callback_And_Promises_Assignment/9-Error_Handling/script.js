
const getResponse = async (API) => {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}


const url = "https://jsonplaceholder.typicode.com/posts/123456789"
getResponse(url).then((data) => {
    if (data) {
        console.log(data);
    }
})