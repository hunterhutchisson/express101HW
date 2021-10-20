const express = require('express');

const app = express();
const port = 3000;

//1. Hello World
// Make an express program that will display "Hello, world!" at the root URL: /
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

//2. Routes
// Add to your program the following pages:

// "Meow" at the URL /cats "Woof" at the URL /dogs "Living together" at the URL /cats_and_dogs
app.get('/cats', (req, res) => {
    res.send('Meow')
})
app.get('/dogs', (req, res) => {
    res.send('Woof')
})
app.get('/cats_and_dogs', (req, res) => {
    res.send('Living together')
})

//3. Route Parameters
// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL

// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc..

app.get('/greet/:name', (req, res) => {
    let name = req.params.name
    res.send(`Hello, ${name}!`)
})

//4. Query Parameters: Tell the year you were born
// Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:

// /year?age=32 it will display You were born in 1985

app.get('/year', (req, res) => {
    let age = req.param('age')
    let todaysDate = new Date()
    let year = todaysDate.getFullYear()
    let birthYear = year - age
    res.send(`You were born in ${birthYear}`)
})




app.listen(port, () => {
    console.log(`listening on port ${port}`);
});