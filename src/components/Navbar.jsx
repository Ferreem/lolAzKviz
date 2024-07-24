import homeLogo from '../styles/images/home.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const returnToMainMenu = () => {
    navigate(`/`);
  };

    return (
      <>
        <div className="w-screen bg-slate-700 m-0 border-b-2 border-white bg-transparent flex justify-between items-center" style={{height: '5%',
          backgroundColor: 'rgba(18, 19, 18, 0.749)',
          backdropFilter: 'blur(8px) saturate(150%)'}}>
          <div className="pl-5"><img src={homeLogo} onClick={returnToMainMenu} style={{height:'30px', filter: 'invert(100%)'}}  alt="" /></div>
          <div className="pr-5">Guest</div>

        </div>
      </>
    )
  }
  
  export default Navbar
  