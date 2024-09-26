import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGODB_URI
mongoose.set('strictQuery',false)

mongoose.connect(url).then(result =>
  console.log("connected to mongoDB")
).catch(error => {
  console.log("error connecting to MongoDB", error.message)
})

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Product = mongoose.model('Product', productSchema)

export default Product