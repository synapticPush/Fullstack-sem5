import express from 'express';

const app = express();  

app.get("/", (req, res) => { // route and callback function
    res.status(200).json({
        message: "Hello World"
    })
})

app.get("/about", (req, res) => { 
    res.status(200).json({
        message: "About Page"
    })
})

app.get("/home",(req, res) =>{
  res.status(200).json({
    message: "Home Page"
  })
})


app.post("/uploadDocument",(req,res) =>{
    res.status(200).json({
        result: "Document Uploaded Successfully"
    })
})
app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})

