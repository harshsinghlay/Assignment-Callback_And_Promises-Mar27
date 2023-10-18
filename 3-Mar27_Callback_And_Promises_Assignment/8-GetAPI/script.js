

const getResponse = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const url = "https://jsonplaceholder.typicode.com/posts"
getResponse(url).then((response) => {
    console.log(response);
})