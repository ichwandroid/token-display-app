const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let currentToken = null;
let timer = null;

app.use(express.static("public", { extensions: ['html'] }));

io.on("connection", (socket) => {
    console.log("Client connected");

    // Kirim token jika masih aktif
    if (currentToken) {
        socket.emit("showToken", currentToken);
    }

    socket.on("newToken", (token) => {
        currentToken = token;
        io.emit("showToken", token);

        // Reset timer jika ada token baru
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            currentToken = null;
            io.emit("hideToken");
        }, 5 * 60 * 1000); // 5 menit
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});