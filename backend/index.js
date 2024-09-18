import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const products = [
    {
        id: '1',
        name: 'ball',
        price: '10',
        category: 'sport'
    },
    {
        id: '2',
        name: 'bat',
        price: '500',
        category: 'sport'
    },
    {
        id: '3',
        name: 'pencil',
        price: '5',
        category: 'stationary'
    }
]

app.get('/', (req, res) => {
    res.send('Add /products to url')
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id   
    const prod = products.find(p => p.id === id)
    if(prod){ res.json(prod)}
    else{res.status(204).end()}
})

const generateid = () => {
    const maxID = products.length > 0? Math.max(...products.map(p => Number(p.id))) : 0
    return String(maxID+1)
}

app.post('/products', (req, res) => {
    const body = req.body
    const prod = {
        id: generateid(),
        name: body.name,
        price: body.price,
        category: body.category
    }

    products.push(prod)
    res.json(products)
})

const PORT = 3001
app.listen( PORT, ()=>{
    console.log("running on port "+PORT)
})