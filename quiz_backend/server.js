import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from 'dotenv';
import router from "./router/route.js";
import connect from "./database/conn.js";

const app = express()


app.use(morgan('short'));
app.use(cors());
app.use(express.json());
config();

const port= process.env.PORT || 8080


app.use("/api",router)

app.get('/',(req,res)=>{
    try {
        res.json("get request")
    } catch (error) {
        res.json(error)
    }
})

;connect().then(()=>{
            try {
                app.listen(port, ()=>{
                    console.log(`server listening at  http://localhost:${port}` )
                })
            } catch (error) {
                console.log("error connecting to server", error)
            }
            })
          .catch(error=> console.log(error))

