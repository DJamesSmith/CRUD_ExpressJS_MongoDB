const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.set("views", "views")

// Access Route
const studentRouter = require('./route/studentRouter')
app.use(studentRouter)

const dbDriver = "mongodb+srv://dionjamessmith:mwT1njLCNhxc68jd@cluster0.apg8y7z.mongodb.net/StudentCrud"

const port = process.env.PORT || 5000

mongoose.connect(dbDriver, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server & DB connected, listening on PORT http://localhost:${port}`)
        })
    })
    .catch(error => {
        console.log(`Server error: ${error}`)
    })
