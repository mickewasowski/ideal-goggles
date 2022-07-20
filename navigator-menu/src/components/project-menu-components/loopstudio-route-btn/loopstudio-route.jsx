import {NavLink} from 'react-router-dom'



function LoopstudioRouteBtn(){

    return(
        <NavLink className={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} to={'project/loop-studio'}>
            <img className='w-96' src='./loopstudio-thumbnail.jpg'/>
            Loop Studio
        </NavLink>
    )
}

export default LoopstudioRouteBtn;