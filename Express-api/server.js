const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
// A middleware can modify a request.
app.use(express.json());

function logger(req, res, next){

  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next();

}
app.use(logger);


function validateUser(req, res, next) {
  const allowed = true;

  if (!allowed) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  next();
}
  

// In-memory array to store users (simple demo data)
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// 1. GET API: Fetch all users

app.get('/home', (req, res) =>{
  res.status(200).json({ message: "Welcome to the User API" });
});

app.get('/getUsers', validateUser, (req, res) => {
  res.status(200).json(users);
});
  
// 2. POST API: Create a new user
app.post('/createUser', (req, res) => {
  const { name, email } = req.body;

  // Simple validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  // Create new user object
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  // Add to our users list
  users.push(newUser);

  // Send back success response with created user
  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
