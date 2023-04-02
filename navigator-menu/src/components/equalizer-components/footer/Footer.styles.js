import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Wrapper = tw.footer`
    flex
    justify-between
    my-[7rem]

    phone:flex-col
    phone:px-[1rem]
    phone:my-[2rem]

    tablet:block
`;

export const LogoContainer = tw.div`
flex-[2_2_0%]

tablet:mb-[2rem]
`;

export const CopyrightWrapper = tw.div`
w-1/4
flex-[2_2_0%]

phone:flex-col
phone:w-4/5
phone:mt-[2rem]

tablet:w-1/2
tablet:float-left
`;

export const IconsWrapper = tw.div`
flex-[4_4_0%]
flex
justify-end

phone:justify-start
phone:mt-[2rem]

tablet:self-end
tablet:float-right
tablet:pt-[1.5rem]
`;

export const AnchorTag = tw(NavLink)`
    ml-[2rem]
    no-underline

    phone:ml-0
    phone:mr-[1.5rem]
`;
