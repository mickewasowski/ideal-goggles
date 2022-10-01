import tw from 'tailwind-styled-components/dist/tailwind';
import { NavLink } from 'react-router-dom';

export const Wrapper = tw.footer`
    bg-genericBlack
    flex
    justify-between
    py-[3rem]
    px-[10rem]
    text-genericWhite

    phone:mt-[5rem]
    phone:p-0
    phone:flex-col
    phone:justify-center
    phone:items-center

    tablet:mt-[5rem]
    tablet:p-0
    tablet:flex-col
    tablet:justify-center
    tablet:items-center
`;

export const LeftContainer = tw.div`
    flex
    flex-col
    gap-6
`;

export const LogoContainer = tw.div`
    phone:mt-[2rem]

    tablet:mt-[2rem]
`;

export const Navigation = tw.ul`
    flex

    phone:flex-col
    phone:font-josefin-sans
    phone:font-light
    phone:text-center
    
    tablet:flex-col
    tablet:font-josefin-sans
    tablet:font-light
    tablet:text-center
`;
export const ListItem = tw.li`
    mr-[2rem]
    pb-[1rem]

    hover:border-b-2
    hover:border-genericWhite
`;

export const RightContainer = tw.div`
    flex
    flex-col
    gap-6

    phone:items-center
    phone:gap-0
    phone:mt-[2rem]

    tablet:items-center
    tablet:gap-0
    tablet:mt-[2rem]
`;

export const IconsContainer = tw.div`
    flex
    justify-end
`;

export const AnchorTag = tw(NavLink)`
    ml-[2rem]
    pb-[1rem]
    border-b-2
    border-[#ffffff00]

    hover:border-b-2
    hover:border-genericWhite

    phone:ml-0
    phone:mx-[1rem]

    tablet:ml-0
    tablet:mx-[1rem]
`;
