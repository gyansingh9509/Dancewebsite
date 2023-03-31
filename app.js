const express = require("express");
const mongoose= require('mongoose');
const path = require("path");
const bodyparser=require('body-parser');
const { stringify } = require("querystring");
const app = express();
const port = 8000;


// mongoose.connect('mongodb://localhost/contactwebsite;',{useNewUrlParse:true,useUnifiedTopology:true});

// const Gyan =  new mongoose.Schema({ 
//     name: String 
// });

// const contact=mongoose.model('contact',Gyan);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
});

app.post('/contact', (req, res) => {
    var myData=new contact(req.body);
    myData.save().then(()=>{
        res.send("This items has been saved to database");
    })
    res.status(400).send("items was not save to database");
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});


