import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
    flex
    justify-between
`;

export const ToggleBtns = tw.div`
    flex
    items-center
    justify-center
    
`;

export const H2 = tw.h2`
    text-[1.5rem]
    font-bold

    dark:text-genericWhite
`;

export const ToggleTextDark = tw.p`
    text-githubTextLightGray
    text-[.8rem]
    tracking-[.2rem]
    font-bold
    mr-[.7rem]
`;

export const ToggleTextLight = tw.p`
    text-genericWhite
    text-[.8rem]
    tracking-[.2rem]
    font-bold
    mr-[.7rem]
`;
