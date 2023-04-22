import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
    w-full    
    h-screen
    flex
    flex-col

    // bg-hero-desktop
    bg-no-repeat
    bg-center
    bg-cover

    phone:w-full 
    phone:h-screen
    phone:hero-mobile

    tablet:w-full 
    tablet:h-screen
    tablet:hero-mobile
`;

export const LowerContainer = tw.div`
    mx-[9rem]
    mt-[3rem]
    mb-[8rem]
    w-[70rem]
    border-4
    border-genericWhite

    phone:w-11/12
    phone:self-center
    phone:m-0
    phone:mt-[12rem]

    tablet:w-11/12
    tablet:self-center
    tablet:m-0
    tablet:mt-[12rem]
`;

export const Heading = tw.h1`
    text-genericWhite
    font-josefin-sans
    uppercase
    text-left
    my-[2rem]
    mx-[3rem]
    text-9xl
    font-light

    phone:m-[1rem]
    phone:text-[2.2rem]

    tablet:m-[1rem]
    tablet:text-[2.2rem]
`;
