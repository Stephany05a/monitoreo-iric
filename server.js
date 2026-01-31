<<<<<<< HEAD
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const si = require('systeminformation');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Cliente conectado');

    // Enviar datos cada segundo
    setInterval(async () => {
        const cpu = await si.currentLoad();
        const mem = await si.mem();
        const temp = await si.cpuTemperature();

        socket.emit('datos-rendimiento', {
            cpu: cpu.currentLoad.toFixed(2),
            ram: ((mem.active / mem.total) * 100).toFixed(2),
            temp: temp.main || 'N/A'
        });
    }, 1000);
});

server.listen(3000, () => {
    console.log('Monitor corriendo en http://localhost:3000');
=======
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const si = require('systeminformation');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Cliente conectado');

    // Enviar datos cada segundo
    setInterval(async () => {
        const cpu = await si.currentLoad();
        const mem = await si.mem();
        const temp = await si.cpuTemperature();

        socket.emit('datos-rendimiento', {
            cpu: cpu.currentLoad.toFixed(2),
            ram: ((mem.active / mem.total) * 100).toFixed(2),
            temp: temp.main || 'N/A'
        });
    }, 1000);
});

server.listen(3000, () => {
    console.log('Monitor corriendo en http://localhost:3000');
>>>>>>> 53f38711276e28e7b266849fd410e3d9c7a313f8
});