import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
    h-screen
    w-screen
    flex
    flex-col
    justify-evenly
    items-center
    font-space-mono
`;

export const PageContainer = tw.div`
    bg-tipsCalculatorMainBackground
    w-3/5
    h-3/5
    rounded-xl
    flex
    justify-around
    items-center

    phone:w-full
    phone:h-auto
    phone:flex-col
    phone:gap-8
    phone:py-8

    tablet:w-full

    laptop:w-full
`;
