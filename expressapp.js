const express = require('express');
var app = express();
//HTTP GET VERB
app.get('/',function(req,res)
{
    res.send("Hello Express");
})
app.get("/Books",function(req,res)
{
    res.send("<h2>Welcome to the Books Section</h2>")
})
app.get("/Students", (req,res)=>
{
    res.send("<h1>Welcome to the Students Section</h1>")
})
//Route Parameters
app.get('/Students/:studentid/Books/:bookid', (req,res)=>{
    res.send(req.params);
})
//Route Handlers
//USING MULTIPLE FUNCTIONS WITH next()
app.get("/example/b",(req, res, next)=> 
{
    console.log("Redirecting to the second function")
    next();   
},
  (req,res)=>
{
    res.send("Hi! How are you?")

}
) 

//HTTP POST VERB
app.post('/',function(req,res)
{
    res.send("<h2>Hello Express</h2>");
})
app.post("/Books",function(req,res)
{
    res.send("<h2>Welcome to the Books Section</h2>")
})
app.post("/Students", (req,res)=>
{
    res.send("<h1>Welcome to the Students Section</h1>")
})
var server = app.listen(3000, ()=>
{
    console.log("Server is running at http://localhost:3000");
}
)
