import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    w-full
    bg-genericWhite
    rounded-xl
    h-[3.5rem]
    flex
    justify-between
    items-center
    shadow-xl

    dark:bg-githubSearchBarAndUserDetailsBgDark

    phone:w-full

    tablet:w-full
`

export const SearchBarContents = tw.div`
    flex
    justify-between
    items-center
    w-full
    px-[.7rem]
    h-full
`

export const InputFieldAndErrorContainer = tw.div`
    w-11/12
    flex
    items-center
    justify-start
    h-full
`

export const InputWrapper = tw.div`
    flex
    w-5/6
    items-center
    justify-start
    h-full
    pl-[.5rem]
`

export const SearchIcon = tw.span`
    mr-[.7rem]
`

export const InputField = tw.input`
    w-3/4
    h-4/5
    text-[1.2rem]
    
    dark:placeholder-genericWhite
    dark:text-genericWhite

    focus:outline-none
`

export const ErrorMsg = tw.p`
    text-githubErrorColor
    font-bold
`

export const ButtonSearch = tw.button`
    text-genericWhite
    bg-githubSearchBtnBg
    rounded-lg
    py-[.7rem]
    px-[1rem]

    hover:bg-opacity-[.7]
`