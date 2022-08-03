import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    flex
    flex-col
    justify-evenly
    w-85%
    self-end
    mr-[2.5rem]
    mt-[2.5rem]
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
`

export const TD = tw.td`
font-bold
text-center
text-[1.4rem]
pb-[.5rem]
`

export const Contacts = tw.div`
    flex
    flex-wrap
    gap-[1.5rem]
    justify-between
`

export const LeftContactsWrapper = tw.div`
w-2/5
`

export const RightContactsWrapper = tw.div`
w-2/5
`

export const DetailsWrapper = tw.div`
    flex
    items-center
    my-[1rem]
    
`

export const IconSpan = tw.span`
    mr-[.5rem]
`