import express from 'express'
import mongoose from 'mongoose';
import dotenv  from 'dotenv'
import taskRoutes from './routes/task.js'
import userRoutes from './routes/user.js'
import categoryRoutes from './routes/category.js'
const app=express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({extended:true,limit:"30mb"}));
app.use(express.text({limit:'30mb'}));

app.get('/',(req,res)=>{
    res.send('Welcome to our app')
})

app.use('/tasks',taskRoutes);
app.use('/categories',categoryRoutes);
app.use('/users',userRoutes);
const PORT= process.env.PORT || 2000

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,console.log(`Server running on port :${PORT}`)))

.catch(err=>console.log('Failed to connect to mongodb',err.message));