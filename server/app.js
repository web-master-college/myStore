const express = require('express');
const app = express();
const PORT = 5000;
const productRoutes = require('./routes/product');
var cors = require('cors');
const products = [{}, {}, {}];

// http://localhost:5000/product/
app.use(cors());
app.use('/products', productRoutes);

// http://localhost:5000/
app.get('/', (request, response) => {
    response.json({products})
    response.end();
})


app.listen(PORT, () =>{
    console.log("Server is running...");
})
