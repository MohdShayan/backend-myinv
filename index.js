import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import cors from 'cors';

import productRoutes from "./routes/productRoutes.js"  

dotenv.config();
const app = express();

ConnectDB()
app.use(cors());
const PORT=process.env.PORT || 3000

app.use(express.json());

app.use('/api/products',productRoutes)

app.listen(PORT, () => {
  console.log("Server Started ! at http://localhost:"+PORT);
});
export default app;
