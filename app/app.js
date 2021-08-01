const express = require('express')
const app = express()

// ターミナルで curl -X GET http://localhost:3000/api/v1/hello を叩くと
// {"message":"Hello, World!"}が返ってくる
app.get('/api/v1/hello', ( req, res ) => {
    res.json({ "message": "Hello, World!" })
})

const port = process.env.PORT || 3000;
app.listen( port )
console.log( "Listen on port: " + port )
