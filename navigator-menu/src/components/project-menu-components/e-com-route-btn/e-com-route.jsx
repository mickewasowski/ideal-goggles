import {NavLink} from 'react-router-dom'


function EComRouteBtn(){

    return(
        <NavLink className={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} to={'project/e-commerce'}>
            <img className='w-96' src='./e-commerce-thumbnail.jpg'/>
            E-Commerce
        </NavLink>
    )
}

export default EComRouteBtn;