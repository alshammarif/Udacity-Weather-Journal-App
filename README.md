# Weather Journal Web App - Udacity Project 3 
###### completed by Farah Alshammari
------

```
The basic HTML and CSS code was taken from the provided Github repository Udacity has provided. 

I have added some changes to the CSS to make it more personalized and have indicated all changes in the files. 

```

### Project Summary Given by Udacity:

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

```
Starting up Web App: have node.js downloaded. Then open a Terminal window in the directory and input 'node.js server.js'

```

------

### Project Requirements and Parameters: 

1. Set up a local server using the `server.js` file provided
* has to set up an instance of the app using `express()`, `cors()`, and `body-parser`
* has a GET and POST request on the server side for the requested entry on the inputed data
2. Create credentials on OpenWeatherMap API:
* get a personal APIkey 
* use the search by Zip Code instance of the API
* extract the returned data and compile it into the Object to be sent to the server side from the client side
3. have a POST and GET method functions on the client side and post the pulled data to the HTML page

------

### Changes I Made to the Original HTML/CSS Code: 

* HTML Changes: 
1. Moved the Zip Code input and Feelings textarea into a div together 
2. Added divs for added information provided by the API such as city name, country, description, weather icon, and feels like

* CSS Changes: 
1. Took out the background color
2. Changed the general color scheme
3. added a border around the zip code and feelings input areas to create a more 'form' like feel
4. changed the font sizes and other minor changes tot he outputted information to give a more easily readable display
5. Made the page title larger and more centralized

------

### My server.js File Set Up: 

* Initiated an empty `projectData` Object to save the posted information
* Set up `express.js` and an 'app' instance using `express`
* Set up `body-parser` and `cors` to aid in reading the application instance
* Initiated the `PORT` variable
* Set up the POST and GET functions for the server side
* Called the `listen()` function to run the app when the server is called by 'node server.js'

### My app.js File Set Up: 

* Global Variables 
* the Generate button Function
* API call function that takes in the [base, zip and api key]
* Client side POST call that sends the compiled data to the server side POST function
* Client side GET call that retrieves the saved data fromt the server side GET function
* HTML build function that takes the retrieved data from the GET call and inputs it to the HTML document 

