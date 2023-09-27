
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { Parallax } from 'react-scroll-parallax';
import PodcastCard from "./PodcastCard";

const AppStyled = styled.div`
  background-image: linear-gradient(15deg, #1a1a1a, var(--color-bg));
  color: var(--color-text);
  display: flex;
  min-height: 100vh;
`;

const ContainerStyled = styled.section`
  margin: auto;
  padding: 1rem;

  @media (min-width: 48em) {
    padding: 4rem;
  }
`;

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 2rem;
  }
`;

const DateStyled = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

const CounterStyled = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 1rem;
  color: var(--color-counter);
  display: flex;
  flex-direction: column;
  font-family: "JetBrains Mono", mono;
  font-size: clamp(1rem, 8vw, 99rem);
  font-weight: 100;
  line-height: 1;
  padding: 2vw;
  text-align: center;

  h2 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: 1.25rem 0 0;
    order: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
  }
`;

// Timing
const nextYear = new Date().getFullYear() + 1;
const targetDate = new Date(`Oct 2, 2023 00:00:00`).getTime();

const generateTimeDisplay = () => {
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;
  const stateObj = {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000),
  };
  return stateObj;
};

// Counter component
const Counter = ({ displayValue, label }) => (
  <CounterStyled>
    <h2>{label}</h2>
    {displayValue}
  </CounterStyled>
);

const Dashboard = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [timeDisplay, setTimeDisplay] = useState(generateTimeDisplay);

  const updateCounters = () => setTimeDisplay(generateTimeDisplay);

  useEffect(() => {
    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get("http://localhost:5000/api/podcasts");
      setPodcasts(response.data);
    };
    fetchPodcasts();
  }, []);

  return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <div>
    //     {podcasts.map((podcast) => (
    //       <PodcastCard key={podcast._id} podcast={podcast} />
    //     ))}
    //     Hi this is your Dashboard.
    //   </div>
    // </div>
    <Fullpage goto={() => console.log("Hola")}>
      <FullPageSections>
        <FullpageSection style={{
          background: 'url(https://img.freepik.com/free-photo/happy-lady-stylish-skirt-boater-posing-pink-wall_197531-23653.jpg?w=1380&t=st=1695808229~exp=1695808829~hmac=d097346ce693a252ab803cc3e8b5669a20caa51faca2b2573e3edc9dec6cea74)',
          backgroundRepeate: 'no-repeate',
          backgroundPosition: 'center',
          height: '100vh',
          padding: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>

          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
          {/* <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img5})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div> */}
        </FullpageSection>
        <FullpageSection style={{
          background: 'url(https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses_158538-5002.jpg?w=1060&t=st=1695808639~exp=1695809239~hmac=1feda6476de7fa8b8cc0d43dcf7b62abfb3cf141e020786bbdce0a8b1f3fa907)',
          backgroundRepeate: 'no-repeate',
          backgroundPosition: 'center',
          height: '100vh',
          padding: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img3})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
            <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
            <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div> */}
        </FullpageSection>
        <FullpageSection
          style={{
            background: 'url(https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?t=st=1695808218~exp=1695808818~hmac=55929836e24fad216aea27739b9c506112451d90cef2786e7561cd54b4f88779)',
            backgroundRepeate: 'no-repeats',
            // backgroundRepeate : 'no-repeat'
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
          {/* <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img7})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div> */}
        </FullpageSection>
        {/* <FullpageSection style={{
            backgroundImage: `url(${Img8})`,
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img8})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            background: '#3358D5',
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img5})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection> */}
      </FullPageSections>

    </Fullpage>
  );
};

export default Dashboard;
