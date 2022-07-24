import tw from 'tailwind-styled-components';
import {NavLink} from 'react-router-dom';

export const StyledNavLink = tw(NavLink)`
    flex
    flex-col
    justify-between    
    h-[40rem]
    w-[45rem]
    mx-1
    p-8
    rounded-xl
    bg-gray-50
    text-2xl
`

export const Image = tw.img`
    w-full
`