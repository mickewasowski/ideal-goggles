import {NavLink} from 'react-router-dom'
import '../../../index.css';

function GithubRouteBtn(){

    return(
        <NavLink className={"h-96 mx-1 p-8 rounded-xl bg-gray-50 text-2xl flex flex-col justify-between"} to={'project/github'}>
            <img className='w-96' src='./github-thumbnail.jpg'/>
            Github
        </NavLink>
    )
}

export default GithubRouteBtn;