import {NavLink} from 'react-router-dom'



function EqualizerRouteBtn(){

    return(
        <NavLink className={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} to={'project/equalizer'}>
            <img className='w-96' src='./equalizer-thumbnail.jpg'/>
            Equalizer
        </NavLink>
    )
}

export default EqualizerRouteBtn;