const path = require('path');
const ProtoBuf = require('protobufjs');
const elasticsearch = require('elasticsearch');
const es = elasticsearch.Client({
    host: 'localhost:9200',
    // log: 'trace'
})

const protoPath = path.join(__dirname, '/..' + '/proto/' + 'product.proto');
// Reference code for future use
// ProtoBuf.load(protoPath, (err, root) => {
//     if (err) 
//         throw err;
//     // obtain the message type
//     const Products = root.lookupType("AC.Products");
//     const Product = root.lookupType("AC.Product");
//     const o1 = {name: 'My Name 1', image: 'http://google.com', 'price': 12.12};
//     const o2 = {name: 'My Name 2', image: 'http://google.com', 'price': 12.12};
//     const o3 = {name: 'My Name 3', image: 'http://google.com', 'price': 12.12};        
//     // create the top level object
//     const products = Products.create([]);
//     // create next level and then push them into the parent object
//     products.products.push(Product.create(o1));
//     products.products.push(Product.create(o2));    
//     products.products.push(Product.create(o3));
//     // Encode a message to an Uint8Array (browser) or Buffer (node)
//     const buff = Products.encode(products).finish();
//     // decode the message, to test the output
//     console.log(Products.decode(buff));
// });

// TODO externalise to a config
const INDEX_NAME = 'myindex';
const TYPE_NAME = 'mytype';

/**
 * 
 * @param {String} text 
 * @param {int} size 
 * @returns Promise
 */
const getSuggestion = (text, size) => {
    return es.search({
        index: INDEX_NAME,
        type: TYPE_NAME,
        body: {
            suggest: {
                nameSuggester: {
                  prefix: text,
                  completion: {
                    field: "name",
                    size: size,
                    fuzzy: {
                      fuzziness: "auto"
                    }
                  }
                }
              }            
        }
    })
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const products = (req, res) => {
    const txt = req.query.txt;
    getSuggestion(txt, 10)
        .then(hits => {
            let data = [];
            ProtoBuf.load(protoPath, (err, root) => {
                if (err) 
                    throw err;
                // obtain the message type
                const Products = root.lookupType("AC.Products");
                const Product = root.lookupType("AC.Product");
                // create the top level object
                const products = Products.create([]);
                hits.suggest.nameSuggester[0].options.forEach(element => {
                    products.products.push(Product.create({
                        name: element._source.name,
                        image: element._source.image,
                        price: element._source.price
                    }));
                });
                // Encode a message to an Uint8Array (browser) or Buffer (node)
                const buff = Products.encode(products).finish();
                console.log(`${hits.suggest.nameSuggester[0].options.length} results extracted for the term "${txt}"`);
                console.log(Products.decode(buff));
                return res.json(buff);
            });
        });
};

module.exports = products;