import {Outlet, NavLink} from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import {NavigationWrapper} from './Main-header.styles';

function MainHeader(){
    let path = window.location.pathname;
    let pathArrayName = path.split('/').filter(x => x);
    let currentProject = pathArrayName.join(' ').toUpperCase();

    return(
        <>
            <NavigationWrapper>
                <NavLink to={'/'} className={'flex items-center'}>
                    <MdArrowBackIosNew className='mr-[.5rem]'/>
                    Back
                </NavLink>
                <h1 className=''>{currentProject}</h1>
            </NavigationWrapper>
            <Outlet />
        </>
    )
}

export default MainHeader;