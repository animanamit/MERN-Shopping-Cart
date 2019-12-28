
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.set('useFindAndModify', false);

const cors = require('cors')


app.use(cors());

// use route
const itemRoute = require('./routes/ItemRouter');
const userRoute = require('./routes/UserRouter');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb+srv://animan:animan@330final-tiwer.mongodb.net/test?retryWrites=true', 
{ useNewUrlParser : true })
.then(() => console.log("Connected to MongoDB!!!"))
.catch(err => console.log(err));

const port = 5000;

app.use("/ItemRouter", itemRoute);
app.use("/UserRouter", userRoute);

app.listen(port, () => {
    console.log('Server started at port ' + port);
});

