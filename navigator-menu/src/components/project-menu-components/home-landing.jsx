import {NavLink} from 'react-router-dom';
import '../../index.css';

import GithubRouteBtn from './github-route-btn/github-route';
import EComRouteBtn from './e-com-route-btn/e-com-route';
import EqualizerRouteBtn from './equalizer-route-btn/equalizer-route';
import LoopstudioRouteBtn from './loopstudio-route-btn/loopstudio-route';
import TipsCalculatorRouteBtn from './tips-calculator-route-btn/tips-route';

function Home(){

    return(
        <>
            <div id='homeHeading' className='w-full text-center py-[12rem]'>
                <h1 className='text-6xl text-white'>All Projects Combined.</h1>
                <h3 className='text-3xl text-white mt-[2rem]'>A navigational menu for all N2J Academy projects.</h3>
            </div>
            <div className="inline-flex flex-wrap gap-4 text-center w-4/5 mt-[6rem] mb-[4rem]">
                <GithubRouteBtn />
                <EComRouteBtn />
                <EqualizerRouteBtn />
                <LoopstudioRouteBtn />
                <TipsCalculatorRouteBtn />
            </div>
        </>
    )
}

export default Home;