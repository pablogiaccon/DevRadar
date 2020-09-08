const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const cors = require('cors');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  'mongodb+srv://pablo:pablo@pablo-wncju.gcp.mongodb.net/devradar?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
);

app.use(cors());
app.use(express.json());

app.use(routes);

server.listen(3333, () => {
  console.log('⚡⚡ Server Online ⚡⚡');
});
