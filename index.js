

// const chalk= require('chalk');
// const text=require('./data')

// console.log((text));
// console.log(__dirname);

const http=require('http')

const server=http.createServer((req,res)=>{
    res.end('<h1>Hello node.js</h1>')
})

server.listen(3000,()=>{
    console.log('Server has been started');
})


