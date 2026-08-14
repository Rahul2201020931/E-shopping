import express from 'express';
import 'dotenv/config' ;
import cors from 'cors';
import connectDB from './config/mongodb.js';
import cloudinaryConfig from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//App config
const app = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(cors());
app.use(express.json());
connectDB();
cloudinaryConfig();


//api endpoints
app.use('/api/user',userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});