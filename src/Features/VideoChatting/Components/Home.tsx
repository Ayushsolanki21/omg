import AvatarCircles from ".././../../components/ui/avatar-circles";

import { Dock, DockIcon } from "../../../components/ui/dock";
import Globe from "../../../components/ui/globe";
import { Link } from "react-router";
import { BackgroundGradient } from "../../../components//ui/background-gradient";
import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision";
const avatarUrls = [
  { imageUrl: "https://via.placeholder.com/40", profileUrl: "#" },
  { imageUrl: "https://via.placeholder.com/40", profileUrl: "#" },
  { imageUrl: "https://via.placeholder.com/40", profileUrl: "#" },

];

const Home = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision className="h-5 p-2"><h1>Omegle</h1></BackgroundBeamsWithCollision>
         <BackgroundGradient>
      <div >
        <Globe />
      </div>
      <div className=" min-h-screen  flex flex-col items-center justify-end p-30">
        <Dock className="mt-96">
        <Link to={'/videochat'}  >
        <DockIcon className="bg-blue-500">
          <span className="text-white">Start</span> 
          </DockIcon>
          </Link>
          <DockIcon className="bg-green-500">
            <span className="text-white">Skip</span>
          </DockIcon>
          <Link to={'/Games'}  >
          <DockIcon className="bg-yellow-500">
            <span className="text-white">Games</span>
          </DockIcon>
          </Link>
          <Link to={'/test'}  >
          <DockIcon className="bg-red-500">
            <span className="text-white">Interest</span>
          </DockIcon>
          </Link>
         
        </Dock>
        <div className="mt-5">
        <AvatarCircles avatarUrls={avatarUrls} numPeople={1005} />
        </div>
        </div>
        <div>
       
        </div>
         </BackgroundGradient>
    
    </div>
  );
};

export default Home;
