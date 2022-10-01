import tw from 'tailwind-styled-components/dist/tailwind';
import { NavLink } from 'react-router-dom';

export const UpperContainer = tw.div`
    flex
    justify-between
    my-[5rem]
    mx-[9rem]

    phone:m-0
    phone:mt-[2rem]
    phone:px-[1rem]
    phone:items-center

    tablet:m-0
    tablet:mt-[2rem]
    tablet:px-[1rem]
    tablet:items-center
`;

export const NavigationContainer = tw.div`
    flex

    phone:w-screen
    phone:h-screen
    phone:z-3
    phone:bg-genericBlack
    phone:absolute
    phone:top-0
    phone:-left-0
    phone:flex-col
    phone:gap-40

    tablet:w-screen
    tablet:h-screen
    tablet:z-3
    tablet:bg-genericBlack
    tablet:absolute
    tablet:top-0
    tablet:-left-0
    tablet:flex-col
    tablet:gap-40
`;

export const MobileLogoContainer = tw.div`
    pt-[2rem]
    px-[1.8rem]
    justify-between
`;

export const UL = tw.ul`
    flex

    phone:flex-col
    phone:gap-4

    tablet:flex-col
    tablet:gap-4
`;

export const LiItem = tw.li`
list-none
mx-[1.5rem]
`;

export const AnchorTag = tw(NavLink)`
    text-genericWhite
    no-underline
    py-[1rem]

    hover:border-solid
    hover:border-b-2
    hover:border-genericWhite

    phone:text-[1.5rem]
    phone:uppercase
    phone:font-josefin-sans
    phone:font-light

    tablet:text-[1.5rem]
    tablet:uppercase
    tablet:font-josefin-sans
    tablet:font-light
`;
