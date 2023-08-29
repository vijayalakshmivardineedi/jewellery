const express=require("express")
const env=require("dotenv")
const mongoose=require("mongoose")
const app=express()
const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
const path=require('path');
const cors =require('cors')

  
env.config() 


mongoose.connect('mongodb+srv://harishjammu:Harish%40123@cluster0.wfrsw9w.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
  
    
})
.then(()=>{
    console.log("Database Connected")
})

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"uploads")));

app.use('/api', authRoutes);

app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);


app.listen(2000,()=>{
    console.log(`Server is runnung on Port 3000`)
});
