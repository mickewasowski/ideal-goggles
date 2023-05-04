import tw from 'tailwind-styled-components';

export const ItemWrapper = tw.div`
    w-[20rem]
    h-[28.4rem]
    bg-no-repeat
    bg-cover
    bg-[#00000066]
    bg-blend-hard-light

    flex
    flex-col
    justify-end
    items-center

    text-genericWhite

    hover:text-genericBlack
    hover:cursor-pointer

    phone:w-11/12
    phone:h-[10rem]

    tablet:w-11/12
    tablet:h-[10rem]
`;

export const Backdrop = tw.div`
    w-full
    h-full
    bg-[#ffffff99]

    relative
    z-1
`;

export const H3 = tw.h3`
    z-[2]
    absolute
    font-josefin-sans
    font-light
    text-[1.8rem]
`;
