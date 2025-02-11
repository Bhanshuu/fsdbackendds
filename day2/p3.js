const fs=require('fs');
const newdata = "i am appoenbd at the end of file";
fs.appendFile("./data.txt","i am append at the end of file",(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Data append successfully");
})