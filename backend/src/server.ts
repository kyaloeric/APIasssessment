import express, { NextFunction, Request, Response, json } from 'express'
import cors from 'cors'
import note_router from './routes/noteRoute'

const app = express()

app.use(cors())
app.use(json())

app.use('/note', note_router)

app.use((error: Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: error.message
    })
})

app.listen(4400, ()=>{
    console.log("Server running on port 4400");
})