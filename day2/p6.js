const fs= require('fs');
fs.rmdir("mydir",(e)=>{
    if(e){
        console.error("error deleting directory:",e);
        return;

    }
    console.log("directory deleted succesfully!");
});