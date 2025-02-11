const fs=require('fs')
const data="i am  new data";
fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("creates")

})