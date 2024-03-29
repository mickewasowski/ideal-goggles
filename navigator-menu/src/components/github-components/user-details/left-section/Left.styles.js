import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
w-11/12
text-center
self-center

phone:flex
phone:flex-col
phone:justify-around

tablet:flex
tablet:flex-col
tablet:justify-around
`;

export const MainInfo = tw.div`
    flex
    flex-wrap
    justify-end

    phone:flex-col
    phone:justify-evenly

    tablet:flex-col
    tablet:justify-evenly

    laptop:justify-start
`;

export const PicAndUsernameWrapper = tw.div`
    w-full
    text-left
    mt-[2rem]

    phone:flex
    phone:w-full

    tablet:flex
    tablet:w-full
`;

export const ProfilePicture = tw.img`
    w-[6rem]
    h-[6rem]
    rounded-full
    float-left
    mr-[2.2rem]
`;

export const H2 = tw.h2`
    mt-0
    mb-[.5rem]
    text-3xl
    font-bold

    dark:text-genericWhite
`;

export const H4 = tw.h4`
    text-githubUsernameText
    mt-0
    text-lg
`;

export const JoinedWrapper = tw.div`
    w-1/2
    mt-[2rem]
`;

export const JoinedParag = tw.p`
    text-githubUserDetailsParagText
    float-right

    dark:text-genericWhite

    phone:text-left
    phone:mb-[2rem]

    tablet:text-left
    tablet:mb-[2rem]
`;

export const BioWrapper = tw.div`
    w-85%
    text-left
    mt-[2rem]

    phone:w-auto

    tablet:w-auto

    laptop:w-auto
    laptop:my-[2rem]
`;

export const BioParag = tw.p`
    text-githubUserDetailsParagText

    dark:text-genericWhite

    phone:text-left
    phone:mb-[2rem]
    phone:break-all

    tablet:text-left
    tablet:mb-0
    tablet:break-all
`;
