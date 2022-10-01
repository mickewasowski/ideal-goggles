import tw from 'tailwind-styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = tw.div`
    flex 
    w-full 
    justify-around 
    h-[4rem] 
    items-center 
    text-xl 
    bg-mainHeaderBackground 
    text-genericWhite 
    uppercase

    phone:text-base
`;

export const StyledNavLink = tw(NavLink)`
    flex 
    items-center
`;
