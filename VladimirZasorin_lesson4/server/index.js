const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const port = process.env.PORT || 3000;

const Message = require('./utils/Message');

app.use(cors());

io.on('connection', (socket) => {
    socket.on('user message', async (msg) => {
        io.emit('server message', await new Message(msg).save());
    });
});

app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.send(messages);
});
  
app.get('/messages/:id', async (req, res) => {
    const message = await Message.findById(req.params.id);
    res.send(message);
});

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});