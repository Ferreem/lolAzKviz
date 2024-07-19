import '../styles/MainMenu.scss'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


function MainMenu() {



  return (
    <>
      <Navbar />
      <div className='main'>
        <div className='header'>
          <Header />
        </div>
        <div className='my-10'>
          <Button link={'/game'}>Play with friend</Button>
          <Button>Quick Play</Button>
          <Button>Tutorial</Button>
        </div>
      </div>
    </>
  )
}

export default MainMenu;