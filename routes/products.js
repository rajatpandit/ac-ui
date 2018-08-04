const elasticsearch = require('elasticsearch');
const es = elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
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
                data.push(element.text);
            });
            console.log(data);
            return res.json({message: 'i am here now'});
        });
};

module.exports = products;