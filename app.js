var express = require('express');
const ejs = require('ejs');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const PORT = 5000;
app.listen(PORT, ()=>{

    console.log(`Server Running on Port: ${PORT}`)

})

app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/Sobre', function (req, res) {
    res.render('pages/Sobre');
});
app.get('/Blogs', function (req, res) {
    res.render('pages/Blogs');
});
app.get('/BlogPost', function (req, res) {
    res.render('pages/BlogPost');
});
app.get('/BlogPost2', function (req, res) {
    res.render('pages/BlogPost2');
});

