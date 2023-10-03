import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react'; 
//import axios from "axios";
import io from 'socket.io-client';

function App() {
  let socket;

  useEffect(()=>{
    console.log('연결 시도');

    socket = io('http://localhost:5000', {
        cors: {
            origin: '*',
        },
        transports: ['websocket'], // 웹소켓 사용
  });

    socket.on('connect', (data) => { // socket 연결 성공. 서버와 통신 시작.
        console.log(data);
        console.log('Socket connected');
    });


  },[])

  return (
    <div className="App">
      <div onClick={e=>{e.stopPropagation(); console.log('클릭'); socket.emit('enter', '클릭'); }}>
        클릭
      </div>
    </div>
  );
}

export default App;
