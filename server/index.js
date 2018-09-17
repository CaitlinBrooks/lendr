var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = 3000

//Server for socket
var app = require("http").createServer(server);
var io = require("socket.io")(app);


var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//Fire up database connection
require('./db/db-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR AUTH ROUTES BEFORE YOUR GATEKEEPER, OTHERWISE YOU WILL NEVER GET LOGGED IN
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use(auth.router)
// @ts-ignore



//Gate Keeper Must login to access any route below this code
server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

//socket connected users
let connectedUsers = {};
let rooms = {};

io.on("connection", socket => {
  console.log("User Connected");

  //notify connector of successfull connection
  socket.emit("CONNECTED", {
    socket: socket.id,
    message: "Successfully Connected"
  });

  //join a room
  socket.on("join", data => {
    //insure connection passed name
    if (data.name) {
      //attaches name to socket
      socket.user = data.name;

      //adds connection to room
      socket.join("BCW");

      //adds user to connectedUsers
      connectedUsers[data.name] = data.name;

      //notify connection of room connection
      socket.emit("joinedRoom", {
        roomName: "BCW",
        connectedUsers: connectedUsers
      });

      //notify room of new connection
      io.to("BCW").emit("newUser", { userName: data.name });
    }
  });

  //connection leaves room
  socket.on('leave', data => {
    //confirm they were in a room
    if (socket.user) {
      //remove from connected room
      delete connectedUsers[socket.user]
      io.to('BCW').emit('left', socket.user)
    }
  })

  //connection disconnectsd
  socket.on('disconnect', data => {
    if (socket.user) {
      //remove from connected room
      delete connectedUsers[socket.user]
      io.to('BCW').emit('left', socket.user)
    }
  })

  socket.on('message', data => {
    if (data.message && data.user) {
      console.log('message received')
      io.to('BCW').emit('newMessage', data)
    }
  })

});

//YOUR ROUTES HERE!!!!!!
let userRoutes = require('./routes/user')
let lendRoutes = require('./routes/lend')
server.use('/api/user', userRoutes)
server.use('/api/lend', lendRoutes)






//Catch all
server.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})