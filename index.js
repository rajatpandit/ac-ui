const express = require('express');
const bodyParser = require('body-parser');

// load the route files
const products = require(__dirname + '/routes/products');
const productsBuff = require(__dirname + '/routes/products-pbuff');
const app = express();

// to get the data sent to it via JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

/* API Router configuration */
router.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})
router.get('/ac', products);
router.get('/acbuff',productsBuff);

/* Configure the router */
app.use('/api', router);
/* Configure for static assets */
app.use('/', express.static('public'));

app.listen(port);
console.log(`API listening on port ${port}`);