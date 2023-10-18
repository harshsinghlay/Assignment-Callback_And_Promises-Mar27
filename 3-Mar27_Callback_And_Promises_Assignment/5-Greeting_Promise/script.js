

const Greeting = async(name)=>{
     return new Promise((resolve,reject)=>{
        resolve(`Hello, ${name}!`);
     })
}

Greeting("harsh").then((message)=>{
    console.log(message);
})