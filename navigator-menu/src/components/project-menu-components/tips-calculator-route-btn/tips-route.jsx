import {NavLink} from 'react-router-dom'


function TipsCalculatorRouteBtn(){

    return(
        <NavLink className={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} to={'project/tips-calculator'}>
            <img className='w-96' src='./tipscalculator-thumbnail.jpg'/>
            Tips Calculator
        </NavLink>

    )
}

export default TipsCalculatorRouteBtn;