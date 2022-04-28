const express = require('express')
const app = express()
const port = 4100

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JAEKYUNGKIM:tlswh7239@boilerplate.ze4p2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))