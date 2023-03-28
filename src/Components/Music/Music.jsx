import React, { useEffect } from "react";

function Music() {
  let eventSource = new EventSource(
    "https://social-network.samuraijs.com/api/1.0/dialogs/messages/new/count",
    {
      withCredentials: true,
    }
  );

  // eventSource.onmessage = function (event) {
  //   console.log("Нове повідомлення", event.data);
  //   // буде зареєстровано 3 рази для потоку даних вище
  // };

  // return <div>Music</div>;
  return <div>Test messages</div>;
}

export default Music;

// import React, { useCallback, useEffect, useRef, useState } from "react";

// const Music = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [data, setData] = useState(null);
//   const [status, setStatus] = useState("");
//   const ws = useRef(null);

//   useEffect(() => {
//     if (!isPaused) {
//       ws.current = new WebSocket("wss://ws.kraken.com/"); // создаем ws соединение
//       ws.current.onopen = () => setStatus("Соединение открыто"); // callback на ивент открытия соединения
//       ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

//       gettingData();
//     }

//     return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
//   }, [ws, isPaused]);

//   const gettingData = useCallback(() => {
//     if (!ws.current) return;

//     ws.current.onmessage = (e) => {
//       //подписка на получение данных по вебсокету
//       if (isPaused) return;
//       const message = JSON.parse(e.data);
//       setData(message);
//     };
//   }, [isPaused]);

//   return (
//     <>
//       {!!data && (
//         <div>
//           <div>
//             <h2>{status}</h2>
//             <p>{`connection ID: ${data?.connectionID}`}</p>
//             <p>{`event: ${data?.event}`}</p>
//             <p>{`status: ${data?.status}`}</p>
//             <p>{`version: ${data?.version}`}</p>
//           </div>
//           <button
//             onClick={() => {
//               ws.current.close();
//               setIsPaused(!isPaused);
//             }}
//           >
//             {!isPaused ? "Остановить соединение" : "Открыть соединение"}
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Music;
