import express from 'express'

import { getProducts, getProduct, createProduct } from './database.js'

const app = express()

app.use(express.json())

app.get("/products", async (req, res) => {
    const products = await getProducts()
    res.send(products)
})

app.get("/products/:id", async (req, res) => {
    const id = req.params.id
    const product = await getProduct(id)
    res.send(product)
})

app.post("/product", async (req, res) => {
    const {name, description, price} = req.body
    const product = await createProduct(name, description, price)
    res.status(201).send(product)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("An Error has occured!")
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})