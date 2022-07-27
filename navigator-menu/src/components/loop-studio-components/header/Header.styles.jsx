import tw from "tailwind-styled-components/dist/tailwind";


export const HeaderContainer = tw.header`
    w-full    
    h-screen
    flex
    flex-col

    bg-hero-desktop
    bg-no-repeat
    bg-center
    bg-cover
`

export const LowerContainer = tw.div`
    mx-[9rem]
    mt-[3rem]
    mb-[8rem]
    w-[70rem]
    border-4
    border-genericWhite
`

export const Heading = tw.h1`
    text-genericWhite
    font-josefin-sans
    uppercase
    text-left
    my-[2rem]
    mx-[3rem]
    text-9xl
    font-light
`