const express = require('express')
const mongoose = require('mongoose')
// const { User } = require('./model/user')
// const { Category } = require('./model/category')
// const { Product } = require('./model/product')
// const { Order } = require('./model/order')
// const { Payment } = require('./model/payment')
// const { Wishlist } = require('./model/wishlist')
// const { Cart } = require('./model/cart')
require('dotenv').config()
const bodyParser = require('body-parser');
const categoryrouter = require('./routes/categoryRoutes');
const userrouter = require('./routes/userroutes');
const orderRouter = require('./routes/oderRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const wishlistRouter = require('./routes/wishlistRoutes');

mongoose.connect(process.env.dbUrl)
  .then(() => {
    console.log("db connected")

    const app = express();
    app.use(bodyParser.json());//use is a middleware 
    app.use('/user', userrouter);
    app.use('/category', categoryrouter);
    app.use('/cart', cartRouter);
    app.use('/order', orderRouter);
    app.use('/product',productRouter); 
    app.use('/wishlist', wishlistRouter);
      app.use(express.json());
      app.use(cors());
  
      app.use('/auth', authApi);
      app.use('/product', productApi);
      app.use('/category', categoryApi);
  
  
    // app.get('/all_products',async(req,res)=>{
    //       const products= await Product.find()
    //       res.send(products)
    // })
    // app.get('/:id',async(req,res)=>{
    //   const data=await User.findById(req.params.id);
    //   res.send(data);
    // })
    // app.post('/order',async(req,res)=>{
    //   const data=await User.create(req.body);
    //   res.send("ok");
    // })

    // app.patch('/:id',async(req,res)=>{
    //   const data=await User.findByIdAndUpdate(req.params.id,req.body);
    //   res.send(data);
    // })
    // app.delete('/:id',async(req,res)=>{
    //   const data=await User.findByIdAndDelete(req.params.id);
    //   res.send(data);
    // })
    app.listen(process.env.PORT, () => {
      console.log("started listening at 7000 port")
    })                                                                                      
  }).catch((err) => {
    console.log(err)
  })


// **Dummy Data**
// const users = [
//   { name: "Rahul Sharma", email: "rahul@gmail.com", password: "password123", role: "customer" },
//   { name: "Priya Verma", email: "priya@gmail.com", password: "password123", role: "customer" },
//   { name: "Amit Patel", email: "amit@gmail.com", password: "password123", role: "admin" },
//   { name: "Sneha Iyer", email: "sneha@gmail.com", password: "password123", role: "customer" }
// ];

// const categories = [
//   { name: "Vegetables", description: "Fresh and organic vegetables" },
//   { name: "Fruits", description: "Seasonal and exotic fruits" },
//   { name: "Dairy", description: "Milk, cheese, and dairy products" },
//   { name: "Snacks", description: "Indian snacks and namkeens" }
// ];

// const products = [
//   { name: "Aloo (Potato)", description: "Fresh farm potatoes", price: 40, category: "", stock: 100 },
//   { name: "Mango (Alphonso)", description: "Sweet and juicy mangoes", price: 150, category: "", stock: 50 },
//   { name: "Paneer", description: "Fresh homemade paneer", price: 250, category: "", stock: 30 },
//   { name: "Bhujia Sev", description: "Crispy and spicy Bhujia sev", price: 80, category: "", stock: 80 }
// ];

// const wishlists = [
//   { userId: "", products: [] }
// ];

// const carts = [
//   { userId: "", products: [] }
// ];

// const orders = [
//   { userId: "", products: [], totalAmount: 0, status: "Pending" }
// ];

// const payments = [
//   { orderId: "", userId: "", paymentMethod: "COD", paymentStatus: "Pending" }
// ];

// // **Populate Database**
// const seedDB = async () => {
//   try {
//     // Clear existing data
//     await User.deleteMany({});
//     await Category.deleteMany({});
//     await Product.deleteMany({});
//     await Wishlist.deleteMany({});
//     await Cart.deleteMany({});
//     await Order.deleteMany({});
//     await Payment.deleteMany({});

//     // Insert Users
//     const createdUsers = await User.insertMany(users);
//     console.log("Users Inserted");

//     // Insert Categories
//     const createdCategories = await Category.insertMany(categories);
//     console.log("Categories Inserted");

//     // Map category IDs to products
//     products[0].category = createdCategories[0]._id; // Vegetables
//     products[1].category = createdCategories[1]._id; // Fruits
//     products[2].category = createdCategories[2]._id; // Dairy
//     products[3].category = createdCategories[3]._id; // Snacks

//     // Insert Products
//     const createdProducts = await Product.insertMany(products);
//     console.log("Products Inserted");

//     // Populate Wishlist
//     wishlists[0].userId = createdUsers[0]._id;
//     wishlists[0].products = [createdProducts[1]._id, createdProducts[2]._id];

//     // Insert Wishlist
//     await Wishlist.insertMany(wishlists);
//     console.log("Wishlists Inserted");

//     // Populate Cart
//     carts[0].userId = createdUsers[1]._id;
//     carts[0].products = [{ productId: createdProducts[0]._id, quantity: 2 }];

//     // Insert Cart
//     await Cart.insertMany(carts);
//     console.log("Carts Inserted");

//     // Populate Orders
//     orders[0].userId = createdUsers[2]._id;
//     orders[0].products = [{ productId: createdProducts[3]._id, quantity: 1 }];
//     orders[0].totalAmount = createdProducts[3].price;

//     // Insert Orders
//     const createdOrders = await Order.insertMany(orders);
//     console.log("Orders Inserted");

//     // Populate Payments
//     payments[0].orderId = createdOrders[0]._id;
//     payments[0].userId = createdUsers[2]._id;

//     // Insert Payments
//     await Payment.insertMany(payments);
//     console.log("Payments Inserted");

//     console.log("✅ Database Seeded Successfully");
//     mongoose.connection.close();
//   } catch (error) {
//     console.error("Error Seeding Database:", error);
//     mongoose.connection.close();
//   }
// };


