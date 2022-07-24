import tw from 'tailwind-styled-components';
import {NavLink} from 'react-router-dom';

export const StyledNavLink = tw(NavLink)`
    flex
    flex-col
    justify-between
    items-center    
    h-[25rem]
    w-[30rem]
    mx-1
    p-8
    rounded-sm
    bg-mainMenuCardsBackground
    text-2xl
    shadow-md

    hover:bg-mainMenuCardsHoverBackground

    phone:h-[18rem]

    tablet:h-[25rem]
`

export const Image = tw.img`
    w-10/12

    hover:w-full

    phone:w-full
`