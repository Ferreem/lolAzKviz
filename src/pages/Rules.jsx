import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Rules(){
    const navigate = useNavigate();

    const handleToMainMenu = () =>{
        navigate('/');
    }

    return(
        <>
        <Navbar />
            <div className="flex justify-center">
            <div style={{height: '95vh', width:'80vw',backgroundColor: 'rgba(18, 19, 18, 0.749)',
            backdropFilter: 'blur(8px) saturate(150%)'}} className="w-80 flex flex-col justify-center items-center">
            <div className=" flex flex-wrap justify-center w-2/5 h-2/5 border font-bold my-10 p-4">
                 <h1 className="text-3xl">Stejne jak u klasickeho ale otazky jsou related lolku</h1>
                 <br />
                 <p>teda az na to ze nejsou otazky ano, ne (nechtelo se mi vymyslet vice otazek)</p>
                 <h3>Pokud AZ-kviz vubec neznas podivej se na tohle uzasne video. </h3>
                 </div>
            <div className="w-3/5 mb-8"><VideoPlayer /></div>
            <Button onClick={handleToMainMenu}>Jsem rdy na bomby</Button>


                </div>
            </div>
        </>
    );
}

export default Rules;