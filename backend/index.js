import express, { response } from 'express';
import cors from 'cors';
import Product from './models/product.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
  
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
}

app.get('/', (req, res) => {
    res.send('Add /products to url')
})

app.get('/api/products', (req, res) => {
    Product.find({}).then( products =>
        res.json(products)
    )
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id   
    Product.find({_id:id}).then( products => {
        if(products){ res.json(prod)}
        else{res.status(204).end()}
    })
    
})

// const generateid = () => {
//     const maxID = products.length > 0? Math.max(...products.map(p => Number(p.id))) : 0
//     return String(maxID+1)
// }

app.post('/api/products', (req, res) => {
    const body = req.body
    const product = new Product({
        name: body.name,
        price: body.price,
        category: body.category
    })

    product.save().then(result => {
        console.log('product saved!')
    }).catch(error => next(error))

    Product.find({}).then( products =>
        res.json(products)
    )
})

const PORT = process.env.PORT || 3001
app.listen( PORT, ()=>{
    console.log("running on port "+PORT)
})