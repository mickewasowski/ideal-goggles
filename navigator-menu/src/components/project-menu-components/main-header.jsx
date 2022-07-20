import {Outlet, NavLink} from 'react-router-dom';

function MainHeader(){
    let path = window.location.pathname;
    let pathArrayName = path.split('/').filter(x => x);
    let currentProject = pathArrayName.join(' ').toUpperCase();

    return(
        <>
            <NavLink to={'/'}>Back</NavLink>
            <h1>{currentProject}</h1>
            <Outlet />
        </>
    )
}

export default MainHeader;