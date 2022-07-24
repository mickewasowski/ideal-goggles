import {NavLink} from 'react-router-dom';
import '../../index.css';

import RouteBtn from './route-btn/routebtn-component';

function Home(){

    return(
        <>
            <div id='homeHeading' className='w-full text-center py-[12rem]'>
                <h1 className='text-6xl text-white'>All Projects Combined.</h1>
                <h3 className='text-3xl text-white mt-[2rem]'>A navigational menu for all N2J Academy projects.</h3>
            </div>
            <div className="inline-flex flex-wrap gap-[4rem] text-center w-4/5 mt-[6rem] mb-[4rem]">
                <RouteBtn  path={'project/tips-calculator'} imageSource={'./tipscalculator-thumbnail.jpg'}>Tips Calculator</RouteBtn>
                <RouteBtn path={'project/github'} imageSource={'./github-thumbnail.jpg'}>Github</RouteBtn>
                <RouteBtn path={'project/e-commerce'} imageSource={'./e-commerce-thumbnail.jpg'}>E-Commerce</RouteBtn>
                <RouteBtn path={'project/loop-studio'} imageSource={'./loopstudio-thumbnail.jpg'}>Loop-studio</RouteBtn>
                <RouteBtn path={'project/equalizer'} imageSource={'./equalizer-thumbnail.jpg'}>Equalizer</RouteBtn>
            </div>
        </>
    )
}

export default Home;