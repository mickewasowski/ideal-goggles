import tw from "tailwind-styled-components/dist/tailwind";

export const HomeHeadingWrapper = tw.div`
    w-full 
    text-center 
    py-[12rem]
`

export const H1 = tw.h1`
    text-6xl 
    text-genericWhite

    phone:text-5xl
`

export const H3 = tw.h3`
    text-3xl 
    text-genericWhite 
    mt-[2rem]

    phone:text-2xl
`

export const HomeCardsWrapper = tw.div`
    inline-flex 
    flex-wrap 
    gap-[1rem] 
    text-center 
    w-4/5 
    mt-[6rem] 
    mb-[4rem]
    justify-center
`