import tw from "tailwind-styled-components/dist/tailwind";

export const ShoeImagesWrapper = tw.section`
    flex
    flex-col
    w-[30rem]

    phone:w-screen
`

export const BigImage = tw.img`
    rounded-xl

    hover:cursor-pointer

    phone:rounded-none
`

export const OtherImagesWrapper = tw.div`
    flex
    justify-between
    mt-[2rem]

    phone:hidden
`

export const ImageContainer = tw.div`
    w-[6rem]
    h-[6rem]
    rounded-lg

    hover:outline-2
    hover:outline-eComOrangeColor
    hover:outline
`

export const SmallImage = tw.div`
    w-[6rem]
    h-[6rem]
    bg-center
    bg-no-repeat
    bg-cover
    rounded-lg

    hover:opacity-50
    hover:cursor-pointer
`

export const ArrowsContainer = tw.div`
    hidden

    phone:flex
    phone:relative
    phone:w-screen
    phone:justify-between
    phone:-top-60
`

export const ArrowSpan = tw.span`
    phone:m-0
    phone:w-[3rem]
    phone:h-[3rem]
    phone:bg-genericWhite
    phone:rounded-full

    phone:flex
    phone:justify-center
    phone:items-center
`