const elasticsearch = require('elasticsearch');
const es = elasticsearch.Client({
    host: 'localhost:9200',
    // log: 'trace'
})

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
            hits.suggest.nameSuggester[0].options.forEach(element => {
                data.push({
                    name: element._source.name,
                    image: element._source.image,
                    price: element._source.price
                });
            });
            console.log(`${data.length} results extracted for the term "${txt}"`);
            return res.json(data);
        });
};

module.exports = products;