import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    flex
    flex-col
    p-[10rem]

    phone:mt-[7rem]
    phone:p-0
    phone:items-center

    tablet:mt-[7rem]
    tablet:p-0
    tablet:items-center
`

export const HeadingBtnContainer = tw.div`
    flex
    justify-between

    phone:flex-col

    tablet:flex-col
`

export const Heading = tw.h2`
    font-josefin-sans
    font-light
    uppercase
    text-4xl

    phone:text-center

    tablet:text-center
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

    phone:items-center
    phone:justify-center
    phone:mb-[2rem]
    phone:w-full

    tablet:items-center
    tablet:justify-center
    tablet:mb-[2rem]
    tablet:w-full
`

export const MobileBtn = tw.button`

    hover:bg-genericBlack
    hover:text-genericWhite

    phone:w-[9rem]
    phone:h-[2.5rem]
    phone:border
    phone:font-alata
    phone:uppercase
    phone:text-[.9rem]
    phone:tracking-[.2rem]
    phone:mt-[3rem]
    

    tablet:w-[9rem]
    tablet:h-[2.5rem]
    tablet:border
    tablet:font-alata
    tablet:uppercase
    tablet:text-[.9rem]
    tablet:tracking-[.2rem]
    tablet:mt-[3rem]
`