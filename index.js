const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//Mongoose connection
var dbUrl = 'mongodb://user:user@ds129776.mlab.com:29776/nodejs-test';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, (err) => {
    if (err) {
        res.send(err);
    }
    console.log('DB connected');
});


//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express server running on PORT: ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Server running on PORT: ${PORT}`)
);