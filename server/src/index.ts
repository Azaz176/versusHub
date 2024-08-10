import express, {Application, Request, Response} from "express"
import "dotenv/config"
const app:Application=express()
const PORT= process.env.PORT || 7000
import path from 'path'

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// * Set View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get('/', (req:Request, res:Response)=>{
    return res.send("working")
})

app.listen(PORT, ()=>console.log(`Server is listening on PORT ${PORT}`))