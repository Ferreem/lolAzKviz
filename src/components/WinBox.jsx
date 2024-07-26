import Button from "./Button";
import { useNavigate } from 'react-router-dom';

function WinBox({ player }) {
  console.log('WinBox rendered with player:', player);
    const navigate = useNavigate();

    const returnToMainMenu = () => {
        navigate('/');
    }

    const restartSesion = () => {
        window.location.reload();
    }


    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="p-6 rounded-lg shadow-lg relative w-2/4 max-w-2xl flex flex-col" style={{backgroundColor: 'rgba(18, 19, 18, 0.749)',
            backdropFilter: 'blur(8px) saturate(150%)'}}>
          <p className='z-50 mb-12 pt-12  text-5xl'>{player} wins!</p>
          <Button onClick={restartSesion}>Play again</Button>
          <Button onClick={returnToMainMenu}>To main menu</Button>
        </div>
      </div>
    );
  }
  
  export default WinBox;