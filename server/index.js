import express from 'express' // Or you can import it like this const express = require("express");
import cors from 'cors'
import Connection from './database/db.js'
import Routes from './routes/routes.js'


const app = express()

const PORT = 8000

app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/', Routes)

Connection()

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`))