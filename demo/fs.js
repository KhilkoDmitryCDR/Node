const fs=require('fs');
const path=require('path');
const { buffer } = require('stream/consumers');

// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("carpeta creada");
// })





 const filePath=path.join(__dirname, 'test','text.txt')
// fs.writeFile(filePath,'hello node.js',err=>{
//     if(err){
//         throw err
//     }
//     console.log("arechivo creado");
//     fs.appendFile(filePath,'\nHello again',err=>{
//     if(err){
//         throw err
//     }
//     console.log("arechivo creado");
// })
// })

fs.readFile(filePath,'utf-8',(err,content)=>{
    if(err){
        throw err
    }
    console.log(content);
    // const data=Buffer.from(content)
    // console.log(data.toString());
})