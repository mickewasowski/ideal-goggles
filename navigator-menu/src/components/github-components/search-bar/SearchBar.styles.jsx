import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    w-full
    bg-genericWhite
    rounded-xl
    h-[3.5rem]
    flex
    justify-between
    items-center
`

export const SearchBarContents = tw.div`
    flex
    justify-between
    items-center
    w-full
    px-[.7rem]
`

export const InputFieldAndErrorContainer = tw.div`
    w-11/12
    flex
    items-center
    justify-start
`

export const InputWrapper = tw.div`
    flex
    w-5/6
    items-center
    justify-start
`

export const SearchIcon = tw.span`
    mr-[.7rem]
`

export const InputField = tw.input`
    w-3/4
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