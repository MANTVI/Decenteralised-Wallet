import  express from 'express'
import cors from "cors"   
import generateWallet from "./routes/route.Createwallet.js"
import token from "./routes/route.token.js"


const app = express()
app.use(cors());
app.use(express.json());
app.use("/api/v1", generateWallet);
app.use("/api/v1", token);

export default app;