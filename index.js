const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server)

app.use(express.static(path.join(__dirname, 'public')));
app.set('view', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile)

app.use('/', (req, res) => {
  res.render('index.html')
})

let messages = []

io.on('connection', socket => {
  console.log('Novo usuario conectado! ' + socket.id)
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})

// 1001001007777777700107777777777777777777777770100
// 1001001007777777700107777777777777777777777770100
// 1000100107777777701000100100077777777010100100100
// 1000100107777777701000100100077777777010100100100
// 0100101007777777700010001010077777777010101001000
// 0100101007777777700010001010077777777010101001000
// 1010010007777777777777777001077777777010100010010
// 1010010007777777777777777001077777777010100010010
