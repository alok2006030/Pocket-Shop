import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';


// configure env
dotenv.config()
// database config
connectDB()

//esmodule fix
const__filename=fileURLToPath(import.meta.url);
const__dirname=path.dirname(__filename);

// rest object
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "./client/build")))

// routes
// Create Products
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

// rest api
app.use('*', function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

//PORT
const port = process.env.PORT || 8080;



app.listen(port, () => {
    console.log(
        `Sever runnig on ${process.env.DEV_MODE} ${port}`);
});
