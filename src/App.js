import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from "react";
import {useMediaQuery} from 'react-responsive';
import { BsBatteryFull,BsBatteryHalf, BsBattery} from 'react-icons/bs';
import { BiSolidAmbulance } from 'react-icons/bi';
import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  
  return <>{isPc && children}</>
}

function App() {
  const backgroundArr = [img1, img2, img3, img4, img5];
  let randomIndex = localStorage.getItem('backgroundIndex');

  if (randomIndex === null) {
    randomIndex = Math.floor(Math.random() * backgroundArr.length);
    localStorage.setItem('backgroundIndex', randomIndex);
  }
  
  const backgroundImg = backgroundArr[randomIndex];
  const appStyle ={
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <BsBatteryFull size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BsBatteryHalf size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BsBattery size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BiSolidAmbulance size={100} color='white' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='App' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', textAlign: 'center' }}>0</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '200px' }}></span>
            <div className='App' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', textAlign: 'center' }}>0</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '200px' }}></span>
            <div className='App' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', textAlign: 'center' }}>0</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '200px' }}></span>
            <div className='App' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', textAlign: 'center' }}>0</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>

    </div>
          </div>
        </div>
  );
}

export default App;
