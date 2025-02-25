const http=require('http');

const server=http.createServer(async(req, res)=>{
    const products=await fetch("http://dummyjson.com/products");
    res.setHeader('Content-type', 'application/json');
   const newproducts=await data.json();
   console.log(newproducts);
   res.end(JSON.stringify(newproducts));

});


server.listen(9000, (err)=> {
    if(err)
        console.log(err);
    else
    console.log("Server is running on port 9000");
});