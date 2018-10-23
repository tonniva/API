
/* โหลด Express มาใช้งาน */

  
var app = require('express')();
var cors = require('cors')
app.use(cors())
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });

const books = require('./db')// ใช้ json file

var bodyParser = require('body-parser')


// var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/books', (req, res) => {
    res.json(books)
  })
  
  app.get('/books/:Clinicname', (req, res) => {
      res.json(books.find(book => book.Clinicname === req.params.Clinicname))
    })
  
  //   post
//   app.post('/books', (req, res) => {
//       books.push(req.body)
//       res.status(201).json(req.body)
//       res.end(JSON.stringify(res));
//     })

// //Sample code within your app
// var express = require('express')
// var bodyParser = require('body-parser')

// var app = express()

// // create application/json parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })


    app.post('/books', urlencodedParser, function (req, res) {

        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req)
        books.push(req.body)
         res.status(201).json(req.body)
      
    });
  // End post

 
/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;
 

/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});
 
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});


