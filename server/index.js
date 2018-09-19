var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))

//Server for socket
var app = require("http").createServer(server);
var io = require("socket.io")(app);



var whitelist = ['http://localhost:8080', 'https://lendr-app.herokuapp.com/'];
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

//YOUR ROUTES HERE!!!!!!
let userRoutes = require('./routes/user')
let lendRoutes = require('./routes/lend')
let nodemailer = require('./nodemailer/nodemailer')
server.use('/api/user', userRoutes)
server.use('/api/lend', lendRoutes)

//nodemailer route?






//Catch all
// @ts-ignore
server.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})



let connectedUsers = {};
// @ts-ignore
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
      // @ts-ignore
      socket.user = data.name;

      //adds connection to room
      socket.join("LendrRoom");

      //adds user to connectedUsers
      connectedUsers[data.name] = data.name;

      //notify connection of room connection
      socket.emit("joinedRoom", {
        roomName: "LendrRoom",
        connectedUsers: connectedUsers
      });

      //notify room of new connection
      io.to("LendrRoom").emit("newUser", { userName: data.name });
    }
  });

  //connection leaves room
  // @ts-ignore
  socket.on('leave', data => {
    //confirm they were in a room
    // @ts-ignore
    if (socket.user) {
      //remove from connected room
      // @ts-ignore
      delete connectedUsers[socket.user]
      // @ts-ignore
      io.to('LendrRoom').emit('left', socket.user)
    }
  })

  //connection disconnectsd
  // @ts-ignore
  socket.on('disconnect', data => {
    // @ts-ignore
    if (socket.user) {
      //remove from connected room
      // @ts-ignore
      delete connectedUsers[socket.user]
      // @ts-ignore
      io.to('LendrRoom').emit('left', socket.user)
    }
  })

  socket.on('message', data => {
    console.log("Backend data variable is" + data)
    if (data) {
      console.log('message received')
      io.to('LendrRoom').emit('newMessage', data)
    }
  })

});

app.listen(port, () => {
  console.log('server running on port', port)
  //socket connected users
})