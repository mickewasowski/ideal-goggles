import tw from "tailwind-styled-components/dist/tailwind";

export const ShoeImagesWrapper = tw.section`
    flex
    flex-col
    w-[30rem]
`

export const BigImage = tw.img`
    rounded-xl

    hover:cursor-pointer
`

export const OtherImagesWrapper = tw.div`
    flex
    justify-between
    mt-[2rem]
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