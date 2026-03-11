const express = require("express");
const app = express();

app.use(express.json());

let users =[
    {id:1,name:"John"},
    {id:2,name:"Mary"}
];

app.get("/users",(req,res) => {
    res.json(users);
});

app.post("/users/:id",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({message:"User Added",data:newUser});
})

app.put("/users/:id",(req,res) => {
    const id = parseInt(req.params.id);
    const updated =req.body;

    users = users.map(user =>
        user.id == id ? {...user, ...updated} : user
    );

    res.json({message:"User Updated"}); 
});
    
app.delete("/users/:id",(req,res) =>{
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({message:"User deleted"});
});

app.listen(3000, () => {
    console.log("Api running at http://localhost:3000");
});

