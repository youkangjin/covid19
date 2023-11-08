import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";

function App() {
  const backgroundArr = [img1, img2, img3, img4, img5];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];
  const appStyle ={
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeact: "np-repeact",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  const clockStyle ={
    fontSize: "18px",
    fontFamily: "tway_sky",
    color: "white",
  }
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState({
    name:"",
    age:0,
    date:"",
    programming:""
  });
  useEffect(() => {
    //플라스크 서버로 api를 찾아서 데이터 조회 및 수정
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    fetch("/data").then((res) =>{ //플라스크에 data라는 url 있어야함
        setData({
          name:data.Name,
          age:data.Age,
          date:data.Date,
          programming:data.programming
      })
    });
    return () => clearInterval(id);
  }, []); //인자는 함수와 배열 2개, []에 들어있는 값이 변경되면 자동으로 브라우저가 랜더링
  return (
    <div style={appStyle}>
      <div className='clock'>
      <div className='App'>
        신종 코로나 바이러스
      <div className='App'>
        실시간 현황 🚑
        <h1 style={clockStyle}>
          마지막 업데이트: 
          <day>{formattedDate}</day>
          <span>{time.toLocaleTimeString()}</span>
        </h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
