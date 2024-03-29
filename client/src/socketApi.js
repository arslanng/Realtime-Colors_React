import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Sunucuya bağlanılıyor...")
    socket = io('http://localhost:3001', {
        transports: ["websocket"]
    })

    socket.on("connect", () => 
    console.log("Sununucuya bağlandı")
    );
}

export const send = (color) => {
    socket.emit("newColor", color) // emit metodu clientte isek backende backende isek cliente veri gönderir. İki parametre alır. Hangi kanal? data ne?. Kanal bilgisi backendden alınır.
}

export const subscribe = (cb) => {
    socket.on("receive", (color)=>{
        console.log(color);
        cb(color)
    })
} 