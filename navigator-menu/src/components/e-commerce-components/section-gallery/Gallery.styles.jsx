import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.section`
w-full
h-full

absolute
top-0
left-0
z-10

bg-genericBlack
bg-opacity-50
`

export const GalleryContainer = tw.div`
    w-full
    h-5/6
    flex
    flex-col
    justify-center
    items-center

    mt-[5rem]
`

export const ArrowsContainer = tw.div`
    flex 
    justify-between 
    relative 
    top-80
`

export const ArrowSpan = tw.span`
    m-0
    w-[3rem]
    h-[3rem]
    bg-genericWhite
    rounded-full

    flex
    justify-center
    items-center
`

export const CurrentBig = tw.img`
    w-[40rem]
    h-[40rem]
    rounded-xl
`

export const ThumbnailImgsContainer = tw.div`
    w-[40rem]
    flex
    justify-around
    mt-[2rem]
`

export const ThumbImgContainer = tw.div`
    bg-genericWhite
    rounded-xl

    hover:outline
    hover:outline-eComOrangeColor
    hover:outline-2
`

export const ThumbImg = tw.div`
    w-[7rem]
    h-[7rem]
    bg-center
    bg-no-repeat
    bg-cover
    rounded-xl
    items-center

    hover:opacity-40
`