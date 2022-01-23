const EventEmmiter=require('events')
const emmiter=new EventEmmiter()
emmiter.on('anything',(data)=>{
    console.log(data);
})
emmiter.emit('anything',{a:1})
setTimeout(()=>{
    emmiter.emit('anything',{c:3})
},500)