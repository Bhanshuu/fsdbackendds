// const http = require("http");
// const fs = require("fs/promises");
// const server = http.createServer(async (req, res) => {
//   res.setHeader("content-type", "application/json");
//   res.writeHead(200);
//   if (req.url === "/getdata" && req.method === "GET") {
//     const data = await fs.readFile("./data.json");
//     res.end(JSON.stringify(data));
//   } else if (req.url === "/setdata" && req.method === "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//     req.on("end", async () => {
//       const newData = JSON.parse(body); 
//       let users = [];
//       try {
//         users = JSON.parse(await fs.readFile("./data.json"));
//         const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
//         newData.id = newid;
//         users.push(newData);
//         await fs.writeFile("./data.json", JSON.stringify(users, null, 2));
//         res.end("data set successfully");
//       } catch (e) {
//         console.log(e);
//         res.end("Error Writing file");
//       }
//     });
//   }
// });
// server.listen(9000, () => {
//   console.log("server running on port 9000");
// });

const express = require('express');
const { message } = require('statuses');
const app = express();

app.use(express.json());
let users=[
    {id: 1, name: 'John Doe', age: 30},
    {id: 2, name: 'Jane Doe', age: 25},
    {id: 3, name: 'Alice Doe', age: 35}
 ];
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    const {username,password} = req.body;
    console.log(`User ${username} and password ${password} received`)
    res.json({message: "data Received"});
})
app.post('/reg',(req,res) => {
    const newuser = req.body;
    const newid= users.length > 0 ? users[users.length - 1].id+1 : 1;
    newuser.id = newid;
    users.push(newuser);
    res.json(newuser);
})
app.listen(9000,() => {
    console.log('Server is running on port 9000');
 });