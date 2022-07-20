import {Outlet, NavLink} from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';


function MainHeader(){
    let path = window.location.pathname;
    let pathArrayName = path.split('/').filter(x => x);
    let currentProject = pathArrayName.join(' ').toUpperCase();

    return(
        <>
            <div className='flex w-full justify-around h-[4rem] items-center text-xl bg-black text-white uppercase'>
                <NavLink to={'/'} className={'flex items-center'}>
                    <MdArrowBackIosNew className='mr-[.5rem]'/>
                    Back
                </NavLink>
                <h1 className=''>{currentProject}</h1>
            </div>
            <Outlet />
        </>
    )
}

export default MainHeader;