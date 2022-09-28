const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quadro de Mensagens',messages:messages,newPath: `${req.protocol}://${req.headers.host}`});
});
router.get('/new', function(req, res, next) {
  res.render('form', {title:"Adicionar nova mensagem",newPath: `${req.protocol+"://"+req.headers.host}/new`});
});
router.post('/new', function(req, res, next) {
  messages.push({text:req.body.newMessage, user:req.body.user, added: new Date()})
  res.redirect('/');
});

module.exports = router;
