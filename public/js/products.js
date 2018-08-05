/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AC = (function() {

    /**
     * Namespace AC.
     * @exports AC
     * @namespace
     */
    var AC = {};

    AC.Products = (function() {

        /**
         * Properties of a Products.
         * @memberof AC
         * @interface IProducts
         * @property {Array.<AC.IProduct>|null} [products] Products products
         */

        /**
         * Constructs a new Products.
         * @memberof AC
         * @classdesc Represents a Products.
         * @implements IProducts
         * @constructor
         * @param {AC.IProducts=} [properties] Properties to set
         */
        function Products(properties) {
            this.products = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Products products.
         * @member {Array.<AC.IProduct>} products
         * @memberof AC.Products
         * @instance
         */
        Products.prototype.products = $util.emptyArray;

        /**
         * Creates a new Products instance using the specified properties.
         * @function create
         * @memberof AC.Products
         * @static
         * @param {AC.IProducts=} [properties] Properties to set
         * @returns {AC.Products} Products instance
         */
        Products.create = function create(properties) {
            return new Products(properties);
        };

        /**
         * Encodes the specified Products message. Does not implicitly {@link AC.Products.verify|verify} messages.
         * @function encode
         * @memberof AC.Products
         * @static
         * @param {AC.IProducts} message Products message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Products.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.products != null && message.products.length)
                for (var i = 0; i < message.products.length; ++i)
                    $root.AC.Product.encode(message.products[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Products message, length delimited. Does not implicitly {@link AC.Products.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AC.Products
         * @static
         * @param {AC.IProducts} message Products message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Products.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Products message from the specified reader or buffer.
         * @function decode
         * @memberof AC.Products
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AC.Products} Products
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Products.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AC.Products();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.products && message.products.length))
                        message.products = [];
                    message.products.push($root.AC.Product.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Products message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AC.Products
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AC.Products} Products
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Products.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Products message.
         * @function verify
         * @memberof AC.Products
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Products.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.products != null && message.hasOwnProperty("products")) {
                if (!Array.isArray(message.products))
                    return "products: array expected";
                for (var i = 0; i < message.products.length; ++i) {
                    var error = $root.AC.Product.verify(message.products[i]);
                    if (error)
                        return "products." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Products message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AC.Products
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AC.Products} Products
         */
        Products.fromObject = function fromObject(object) {
            if (object instanceof $root.AC.Products)
                return object;
            var message = new $root.AC.Products();
            if (object.products) {
                if (!Array.isArray(object.products))
                    throw TypeError(".AC.Products.products: array expected");
                message.products = [];
                for (var i = 0; i < object.products.length; ++i) {
                    if (typeof object.products[i] !== "object")
                        throw TypeError(".AC.Products.products: object expected");
                    message.products[i] = $root.AC.Product.fromObject(object.products[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Products message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AC.Products
         * @static
         * @param {AC.Products} message Products
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Products.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.products = [];
            if (message.products && message.products.length) {
                object.products = [];
                for (var j = 0; j < message.products.length; ++j)
                    object.products[j] = $root.AC.Product.toObject(message.products[j], options);
            }
            return object;
        };

        /**
         * Converts this Products to JSON.
         * @function toJSON
         * @memberof AC.Products
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Products.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Products;
    })();

    AC.Product = (function() {

        /**
         * Properties of a Product.
         * @memberof AC
         * @interface IProduct
         * @property {string} name Product name
         * @property {string} image Product image
         * @property {number} price Product price
         */

        /**
         * Constructs a new Product.
         * @memberof AC
         * @classdesc Represents a Product.
         * @implements IProduct
         * @constructor
         * @param {AC.IProduct=} [properties] Properties to set
         */
        function Product(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Product name.
         * @member {string} name
         * @memberof AC.Product
         * @instance
         */
        Product.prototype.name = "";

        /**
         * Product image.
         * @member {string} image
         * @memberof AC.Product
         * @instance
         */
        Product.prototype.image = "";

        /**
         * Product price.
         * @member {number} price
         * @memberof AC.Product
         * @instance
         */
        Product.prototype.price = 0;

        /**
         * Creates a new Product instance using the specified properties.
         * @function create
         * @memberof AC.Product
         * @static
         * @param {AC.IProduct=} [properties] Properties to set
         * @returns {AC.Product} Product instance
         */
        Product.create = function create(properties) {
            return new Product(properties);
        };

        /**
         * Encodes the specified Product message. Does not implicitly {@link AC.Product.verify|verify} messages.
         * @function encode
         * @memberof AC.Product
         * @static
         * @param {AC.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.image);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.price);
            return writer;
        };

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link AC.Product.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AC.Product
         * @static
         * @param {AC.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @function decode
         * @memberof AC.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AC.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AC.Product();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.image = reader.string();
                    break;
                case 3:
                    message.price = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("image"))
                throw $util.ProtocolError("missing required 'image'", { instance: message });
            if (!message.hasOwnProperty("price"))
                throw $util.ProtocolError("missing required 'price'", { instance: message });
            return message;
        };

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AC.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AC.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Product message.
         * @function verify
         * @memberof AC.Product
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Product.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.image))
                return "image: string expected";
            if (typeof message.price !== "number")
                return "price: number expected";
            return null;
        };

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AC.Product
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AC.Product} Product
         */
        Product.fromObject = function fromObject(object) {
            if (object instanceof $root.AC.Product)
                return object;
            var message = new $root.AC.Product();
            if (object.name != null)
                message.name = String(object.name);
            if (object.image != null)
                message.image = String(object.image);
            if (object.price != null)
                message.price = Number(object.price);
            return message;
        };

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AC.Product
         * @static
         * @param {AC.Product} message Product
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Product.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.image = "";
                object.price = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            return object;
        };

        /**
         * Converts this Product to JSON.
         * @function toJSON
         * @memberof AC.Product
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Product.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Product;
    })();

    return AC;
})();

module.exports = $root;
