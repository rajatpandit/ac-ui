# UI for auto complete
POC for UI for autocomplete using dataset from bestbuy (https://github.com/BestBuyAPIs/open-data-set) and trialing performance using both basic JSON and Protocol Buffer

![Basic UI with Data](docs/ui-with-data.png "Basic UI With Data")


### Convert proto files to json
```
$ ./node_modules/.bin/pbjs -t static-module -w commonjs -o \
    ./public/js/products.js \
    ./proto/product.proto 

$ npm install -g browserify

$ browserify ./public/js/products.js -o ./public/js/bundle.js
```
    