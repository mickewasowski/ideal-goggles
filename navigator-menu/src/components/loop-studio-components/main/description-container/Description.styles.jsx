import tw from 'tailwind-styled-components/dist/tailwind';

export const Wrapper = tw.div`
    flex
    items-end
    pt-[10rem]
    pl-[10rem]

    phone:flex-col
    phone:p-0
    phone:gap-3
    phone:items-center

    tablet:flex-col
    tablet:p-0
    tablet:gap-3
    tablet:items-center
`;

export const VRGoggles = tw.div`
    w-[55rem]
    h-[35rem]
    bg-vr-goggles-desktop
    bg-no-repeat
    bg-center
    bg-cover

    phone:bg-vr-goggles-mobile
    phone:w-11/12
    phone:h-[14.5rem]

    tablet:bg-vr-goggles-mobile
    tablet:w-11/12
    tablet:h-[27rem]
`;

export const DescriptionContainer = tw.div`
    w-[30rem]
    h-[20rem]
    bg-genericWhite
    relative
    -left-[12rem]
    flex
    flex-col
    justify-end
    gap-[2rem]
    pl-[5rem]

    phone:static
    phone:p-0
    phone:m-0
    phone:w-8/12
    phone:h-auto

    tablet:static
    tablet:p-0
    tablet:m-0
    tablet:mt-[1rem]
    tablet:w-8/12
    tablet:h-auto
`;

export const Heading = tw.h2`
    font-josefin-sans
    uppercase
    m-0
    text-5xl
    font-light

    phone:text-[2rem]
    phone:text-center

    tablet:text-[2rem]
    tablet:text-center
`;

export const Parag = tw.p`
    m-0
    font-alata
    font-normal
    text-loopStudioDescParag

    phone:text-center

    tablet:text-center
`;
