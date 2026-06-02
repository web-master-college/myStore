const {products} = require("../utils");

const getAllProducts = (request, response) =>{
    response.json(products)
}  


module.exports = {
    getAllProducts
}