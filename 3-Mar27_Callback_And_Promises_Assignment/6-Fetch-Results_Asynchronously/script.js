

const fetchAPI =(url)=>{
     const response  =  fetch(url);
     response.then((r)=>{
        return r.json();
     }).then((r)=>{
        console.log(r);
     })
}

fetchAPI("https://jsonplaceholder.typicode.com/todos/1")
