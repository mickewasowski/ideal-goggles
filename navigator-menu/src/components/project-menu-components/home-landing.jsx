import {NavLink} from 'react-router-dom';
import '../../index.css';

import RouteBtn from './routebtn-component';

function Home(){

    return(
        <>
            <div id='homeHeading' className='w-full text-center py-[12rem]'>
                <h1 className='text-6xl text-white'>All Projects Combined.</h1>
                <h3 className='text-3xl text-white mt-[2rem]'>A navigational menu for all N2J Academy projects.</h3>
            </div>
            <div className="inline-flex flex-wrap gap-4 text-center w-4/5 mt-[6rem] mb-[4rem]">
                <RouteBtn navlinkStyling={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} path={'project/tips-calculator'} imageStyling={'w-96'} imageSource={'./tipscalculator-thumbnail.jpg'}>Tips Calculator</RouteBtn>

                <RouteBtn navlinkStyling={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} path={'project/github'} imageStyling={'w-96'} imageSource={'./github-thumbnail.jpg'}>Github</RouteBtn>

                <RouteBtn navlinkStyling={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} path={'project/e-commerce'} imageStyling={'w-96'} imageSource={'./e-commerce-thumbnail.jpg'}>E-Commerce</RouteBtn>

                <RouteBtn navlinkStyling={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} path={'project/loop-studio'} imageStyling={'w-96'} imageSource={'./loopstudio-thumbnail.jpg'}>Loop-studio</RouteBtn>

                <RouteBtn navlinkStyling={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} path={'project/equalizer'} imageStyling={'w-96'} imageSource={'./equalizer-thumbnail.jpg'}>Equalizer</RouteBtn>
            </div>
        </>
    )
}

export default Home;