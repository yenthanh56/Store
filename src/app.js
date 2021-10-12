const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

const router = require('./routers/index');
router(app);

const db = require('./config/db');
db.connect();

// set default directory for View : css , bootrap ... 
app.use(express.static(path.join(__dirname, 'public')))

// template enigne handlebars 

app.engine('hbs', exphbs({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

// set default view
app.set('views', path.join(__dirname, 'resources/views'));


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})