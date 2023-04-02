import tw from 'tailwind-styled-components';

export const ShoeImagesWrapper = tw.section`
    flex
    flex-col
    w-[30rem]

    phone:w-screen

    tablet:w-screen

    laptop:w-[25rem]
    laptop:justify-around
    laptop:mr-[2rem]
`;

export const MainImageContainer = tw.div`

    phone:h-[30rem]

    tablet:h-[50rem]
`;

export const BigImage = tw.img`
    rounded-xl

    hover:cursor-pointer

    phone:rounded-none
    phone:h-[30rem]

    tablet:rounded-none

    laptop:w-[25rem]
`;

export const OtherImagesWrapper = tw.div`
    flex
    justify-between
    mt-[2rem]

    phone:hidden

    tablet:hidden
`;

export const ImageContainer = tw.div`
    w-[6rem]
    h-[6rem]
    rounded-lg

    

    laptop:w-[5rem]
    laptop:h-[5rem]
`;

export const SmallImage = tw.div`
    w-[6rem]
    h-[6rem]
    bg-center
    bg-no-repeat
    bg-cover
    rounded-lg

    hover:opacity-50
    hover:cursor-pointer

    laptop:w-[5rem]
    laptop:h-[5rem]
`;

export const ArrowsContainer = tw.div`
    hidden

    phone:flex
    phone:relative
    phone:w-screen
    phone:justify-between
    phone:bottom-1/2

    tablet:flex
    tablet:relative
    tablet:w-screen
    tablet:justify-between
    tablet:bottom-1/2
`;

export const ArrowSpan = tw.span`
    phone:m-0
    phone:w-[3rem]
    phone:h-[3rem]
    phone:bg-genericWhite
    phone:rounded-full

    phone:flex
    phone:justify-center
    phone:items-center

    tablet:m-0
    tablet:w-[3rem]
    tablet:h-[3rem]
    tablet:bg-genericWhite
    tablet:rounded-full

    tablet:flex
    tablet:justify-center
    tablet:items-center
`;
