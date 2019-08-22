require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const productCtrl = require('./controllers/product_controller')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
}).catch(err => {
    console.log(err)
})

app.get('/api/products', productCtrl.getAllProducts)
app.get('/api/products/:id', productCtrl.getOneProduct)

app.post('/api/products', productCtrl.createProduct)

app.put('/api/products/:id', productCtrl.updateProduct)

app.delete('/api/products/:id', productCtrl.deleteProduct)

app.listen(SERVER_PORT, () => {
    console.log(`Serving on ${SERVER_PORT}`)
})