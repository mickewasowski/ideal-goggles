import {Outlet, NavLink} from 'react-router-dom';

function MainHeader(){

    return(
        <>
            <NavLink to={'/'}>Back</NavLink>
            <Outlet />
        </>
    )
}

export default MainHeader;