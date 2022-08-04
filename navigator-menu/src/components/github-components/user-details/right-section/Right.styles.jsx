import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    flex
    flex-col
    justify-evenly
    w-85%
    self-end
    mr-[2.5rem]
    mt-[2.5rem]
    pb-[2rem]

    phone:w-11/12
    phone:m-0
    phone:self-center
`

export const AccountInfo = tw.div`
    flex
    rounded-xl
    justify-center
    h-[5rem]
    bg-githubAccountInfoBg

    dark:bg-githubAccountInfoBgDark
`

export const Table = tw.table`
    w-full
`

export const TH = tw.th`
    text-center
    text-[1rem]
    font-normal
    pt-[.5rem]

    text-githubUserDetailsParagText

    dark:text-genericWhite
`

export const TD = tw.td`
font-bold
text-center
text-[1.4rem]
pb-[.5rem]

dark:text-genericWhite
`

export const Contacts = tw.div`
    flex
    flex-wrap
    gap-[1.5rem]
    justify-between
    mt-[1rem]

    phone:flex-col
    phone:gap-0
`

export const LeftContactsWrapper = tw.div`
w-2/5

phone:w-full
`

export const RightContactsWrapper = tw.div`
w-2/5

phone:w-full
`

export const DetailsWrapper = tw.div`
    flex
    items-center
    my-[1rem]
    
    phone:my-0
    phone:mt-[1.5rem]
`

export const IconSpan = tw.span`
    mr-[.5rem]
`