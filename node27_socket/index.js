// yarn add express nodemon
// yarn add socket.io

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

// đối tượng server của socket
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

// lắng nghe các đối tượng client kết vào server
io.on("connection", (socket) => {
    // console.log(socket.id);

    // đẩy dữ liệu cho tất cả client đang kết nối
    io.emit("client-connect", socket.id.substring(0, 4));

    socket.on("disconnect", (reason) => {
        io.emit("client-disconnect", socket.id.substring(0, 4));

    })

    socket.on("gui-mess", mess => {
        io.emit(
            "noidung-chat",
            { id: socket.id.substring(0, 4), mess }
        )
    });
})


httpServer.listen(8080);