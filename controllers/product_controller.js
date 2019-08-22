const createProduct = (req, res) => {
    const {name, description, price, image_url} = req.body
    const db = req.app.get('db')
    db.create_product([name, description, price, image_url]).then(() => {
        res.sendStatus(200)
    }).catch(err => {
        res.status(500).send({errorMessage: "Oh oopsie! How embarrassing"})
        console.log(err)
    })
}

const getOneProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.read_product(id).then((product) => {
        res.status(200).send(product)
    }).catch(err => {
        res.status(500).send({errorMessage: "Oh oopsie! How embarrassing"})
        console.log(err)
    })
}

const getAllProducts = (req, res) => {
    const db = req.app.get('db')
    db.read_products().then((products) => {
        res.status(200).send(products)
    }).catch(err => {
        res.status(500).send({errorMessage: "Oh oopsie! How embarrassing"})
        console.log(err)
    })
}

const updateProduct = (req, res) => {
    const {params, query} = req
    const db = req.app.get('db')
    db.update_product([params.id, query.desc]).then(() => {
        res.sendStatus(200)
    }).catch(err => {
        res.status(500).send({errorMessage: "Oh oopsie! How embarrassing"})
        console.log(err)
    })
}

const deleteProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_product([id]).then(() => {
        res.sendStatus(200)
    }).catch(err => {
        res.status(500).send({errorMessage: "Oh oopsie! How embarrassing"})
        console.log(err)
    })
}

module.exports = {
    createProduct,
    getOneProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}