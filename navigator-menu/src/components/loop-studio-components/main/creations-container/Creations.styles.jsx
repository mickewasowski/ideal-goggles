import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    flex
    flex-col
    p-[10rem]
`

export const HeadingBtnContainer = tw.div`
    flex
    justify-between
`

export const Heading = tw.h2`
    font-josefin-sans
    font-light
    uppercase
    text-4xl
`

export const BtnPrimary = tw.button`
inline-block
w-[9rem]
h-[2.5rem]
border
border-genericBlack

font-alata
uppercase
text-[.9rem]
font-normal
tracking-[.2rem]

hover:bg-genericBlack
hover:text-genericWhite
`

export const CreationsContainer = tw.div`
    flex
    justify-between
    flex-wrap
    gap-8
    mt-[1rem]
`