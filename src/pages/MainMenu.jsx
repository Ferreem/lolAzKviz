import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainMenu.scss'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function MainMenu() {
  const navigate = useNavigate();

  const generateRandomString = (length = 16) => {
    return Math.random().toString(36).substr(2, length);
  };

  const handlePlayWithFriend = () => {
    const randomId = generateRandomString();
    navigate(`/game/${randomId}`);
  };

  return (
    <>
      <Navbar />
      <div className='wrap'>
        <div className='main'>
          <div className='header'>
            <Header />
          </div>
          <div className='my-10'>
            <Button onClick={handlePlayWithFriend}>Play with friend</Button>
            <Button>Quick Play</Button>
            <Button>Tutorial</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainMenu;