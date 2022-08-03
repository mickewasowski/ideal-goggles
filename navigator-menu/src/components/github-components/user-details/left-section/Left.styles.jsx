import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
w-11/12
text-center
self-center
`

export const MainInfo = tw.div`
    flex
    flex-wrap
    justify-end
`

export const PicAndUsernameWrapper = tw.div`
    w-1/2
    text-left
    mt-[2rem]
`

export const ProfilePicture = tw.img`
    w-[6rem]
    h-[6rem]
    rounded-full
    float-left
    mr-[2.2rem]
`

export const H2 = tw.h2`
    mt-0
    mb-[.5rem]
    text-3xl
    font-bold
`

export const H4 = tw.h4`
    text-githubUsernameText
    mt-0
    text-lg
`

export const JoinedWrapper = tw.div`
    w-1/2
    mt-[2rem]
`

export const JoinedParag = tw.p`
    text-githubUserDetailsParagText

    dark:text-genericWhite
`

export const BioWrapper = tw.div`
    w-85%
    text-left
`

export const BioParag = tw.p`
    text-githubUserDetailsParagText

    dark:text-genericWhite
`