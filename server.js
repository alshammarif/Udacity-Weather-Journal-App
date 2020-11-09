// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));



// Setup Server
const PORT = process.env.PORT || 5507;

app.get('/', (req, res) => {
    res.json({message: "sucess"});
})

//the POST and GET servr side function for the Weather Journal Entries data
app.get('/addWJEntry', (req, res) => {
    res.json(projectData);
})

app.post('/addWJEntry', (req, res) => {
    let newData = req.body;
    projectData = {
        city: newData.city,
        country: newData.country,
        weather: newData.weather,
        feelslike: newData.feelslike,
        temprature: newData.temprature,
        wIcon: newData.wIcon,
        date: newData.date,
        content: newData.content
    };
    res.json(projectData);
});

//listen function 
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});