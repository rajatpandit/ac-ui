const express = require('express');
const bodyParser = require('body-parser');

// load the route files
const products = require(__dirname + '/routes/products');
const product = require(__dirname + '/routes/product');
const app = express();

// to get the data sent to it via JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})
router.get('/ac', products);
app.use('/api', router);

app.listen(port);
console.log(`API listening on port ${port}`);