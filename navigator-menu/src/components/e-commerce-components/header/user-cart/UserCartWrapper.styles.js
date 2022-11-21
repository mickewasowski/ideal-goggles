import tw from 'tailwind-styled-components';

export const UserCartContainer = tw.div`
    flex
    justify-between
    items-center
`;

export const CartContainerBtn = tw.button`
    mr-[2.5rem]

    hover:cursor-pointer
`;

export const CartCount = tw.p`
    inline
    w-[1.5rem]
    h-[1.2rem]
    relative
    -top-[.8rem]
    -right-[2rem]
    text-center
    text-genericWhite
    text-sm
    font-bold
    rounded-xl
    bg-eComOrangeColor
`;

export const UserIconContainer = tw.div`
    w-[3rem]
    h-[3rem]
    rounded-full

    hover:outline
    hover:outline-eComOrangeColor
    hover:outline-2

    phone:w-[2.2rem]
    phone:h-[2.2rem]

    tablet:w-[2.2rem]
    tablet:h-[2.2rem]
`;
