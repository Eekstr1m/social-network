// let subscribers = [];

// let ws;

// const closeHandler = () => {
//   console.log("CLOSE WS");
//   setTimeout(createChannel, 3000);
// };

// const messageHandler = (e) => {
//   const newMessages = JSON.parse(e.data);
//   subscribers.forEach((s) => s(newMessages));
// };

// function createChannel() {
//   if (ws) {
//     ws.removeEventListener("close", closeHandler);
//     ws.close();
//   }
//   ws = new WebSocket(
//     "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
//   );
//   ws.addEventListener("close", closeHandler);
//   ws.addEventListener("message", messageHandler);
// }

// export const ChatAPI = {
//   subscribe(callback) {
//     subscribers.push(callback);
//     return () => {
//       subscribers = subscribers.filter((s) => s !== callback);
//     };
//   },

//   unsubscribe(callback) {
//     subscribers = subscribers.filter((s) => s !== callback);
//   },

//   sendMessage(message) {
//     if (ws) {
//       ws.send(message);
//     }
//   },
// };
