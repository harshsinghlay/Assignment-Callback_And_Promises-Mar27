

const requestHandler = async(API1, API2) => {
    const response1 = await fetch(API1);
    const data1 = await response1.json();
    const response2 = await fetch(API2);
    const data2 = await response2.json();
    // Below line returns a resolved promise with object as a resolved value
    return {todo:data1,posts:data2};
}

const url1 = "https://jsonplaceholder.typicode.com/todos/";
const url2 = "https://jsonplaceholder.typicode.com/posts/1";

requestHandler(url1,url2).then((r)=>{
    console.log(r);
})
