var express = require('express')
var port = 4000
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
var details = [];
var MongoClient = require('mongodb').MongoClient

app.get("/details", (req, res) => {
    res.send("Student Details")
})

MongoClient.connect('mongodb://localhost:27017/student_details', function (err, client) {
    if (err) throw err

    var db = client.db('student_details')

    db.collection('student_details').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result)
    })
})

app.post("/student_details", (req, res) => {
    console.log(req.body.Name)
    res.send("You have reached the post route!")
})

app.listen(port, () => {
    console.log(`Server started at : http://localhost:${port}`)
})

