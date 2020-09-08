import socketio from 'socket.io-client';

import { BASE_URL } from './api';

interface ISocketConnectProps {
  latitude: number;
  longitude: number;
  techs: string;
}

const socket = socketio(BASE_URL, {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction: Function) {
  socket.on('new-dev', subscribeFunction);
}

function connect({ latitude, longitude, techs }: ISocketConnectProps) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
