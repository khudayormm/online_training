const express = require('express')
const path = require('path')

const app = express()

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "./public")))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
  

app.use('/', require('./routes/index'))
app.use('/', require('./routes/user'))
app.use('/admin', require('./routes/admin'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is listening..`)
})