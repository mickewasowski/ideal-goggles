import tw from "tailwind-styled-components/dist/tailwind";

export const UserDetailsContainer = tw.div`
    flex
    flex-col
    justify-evenly
    bg-githubUserDetailsContLightBg
    rounded-lg
    shadow-2xl

    dark:bg-githubSearchBarAndUserDetailsBgDark

    phone:w-full
    phone:items-center

    tablet:w-full
    tablet:items-center

    laptop:w-full
    laptop:justify-center
`