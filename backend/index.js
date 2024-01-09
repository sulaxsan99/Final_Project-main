const express = require('express')
const cors= require('cors')
const DbConnection = require('./database');
const mongoose = require('mongoose');
const security = require('./routes/security')
const userRoute =require('./routes/User')
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');


const app  = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
app.use(cors(corsOptions))
app.use(bodyParser.json({limit:'50mb'}));

require('dotenv').config()

DbConnection();
app.use(express.json());



const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: 'http://localhost:3000', // Replace with your frontend URL
        methods: ['GET', 'POST'],
      }
});
// server.use(cors())
app.use((req, res, next) => {
    req.io = io;
    next();
  });
  
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});





app.use('/v1',userRoute)
app.use('/v2', security)



server.listen(process.env.PORT || 5001 , () => {
    console.log(`Port listen in ${process.env.PORT}`);
});


// let messages = [];
// // Endpoint for sending user messages
// app.post('/api/sendUserMessage', (req, res) => {
//     const { userName, message } = req.body;
//     messages.push({ userName, message, fromAdmin: false });

//     // Simulate admin reply
//     messages.push({ userName: 'Admin', message: 'Your message has been received.', fromAdmin: true });

//     res.json({ success: true });
// });

// // New endpoint for sending admin messages
// app.post('/api/sendAdminMessage', (req, res) => {
//     const { userName, message } = req.body;
//     messages.push({ userName, message, fromAdmin: true });

//     // Simulate user reply
//     messages.push({ userName: 'User', message: 'Your message has been received.', fromAdmin: false });

//     res.json({ success: true });
// });

// // Endpoint to get all messages
// app.get('/api/getMessages', (req, res) => {
//     res.json(messages);
// });

// app.post('/v2/update-contact-details', (req, res) => {
//     const { newPhoneNumber, newEmail } = req.body;
  
//     // Assuming you have a database to store contact details
//     // You can perform database operations here to update the contact details
//     // Example: Update the database with newPhoneNumber and newEmail
  
//     // Respond with a success message
//     res.status(200).json({ message: 'Contact details updated successfully.' });
//   });