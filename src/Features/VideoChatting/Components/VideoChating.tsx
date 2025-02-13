import { WarpBackground } from "../../../components/ui/warp-background";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
const VideoChating = () => {
  return (
    <div className="relative w-screen h-screen">
      <WarpBackground className="absolute top-0 left-0 w-full h-full">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
       
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
       Person 1
       </p>

       <p className="text-sm text-neutral-600 dark:text-neutral-400">
         The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
         February 17, 2024. Your best opportunity to get these right now is by
         entering raffles and waiting for the official releases.
       </p>
       <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
         <span>Buy now </span>
         <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           $100
         </span>
       </button>
     </BackgroundGradient>
     <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
       
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
       Person 2
       </p>
       <p className="text-sm text-neutral-600 dark:text-neutral-400">
         The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
         February 17, 2024. Your best opportunity to get these right now is by
         entering raffles and waiting for the official releases.
       </p>
       <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
         <span>Buy now </span>
         <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           $100
         </span>
       </button>
     </BackgroundGradient>
      </WarpBackground>
    </div>
  );
};

export default VideoChating;
