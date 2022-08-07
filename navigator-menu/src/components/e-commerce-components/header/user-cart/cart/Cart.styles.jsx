import tw from "tailwind-styled-components/dist/tailwind";


export const CartList = tw.div`
    absolute
    w-[23rem]
    h-[14rem]
    top-[10rem]
    right-[5rem]
    bg-genericWhite
    rounded-lg
    shadow-2xl
    flex
    flex-col
`

export const CartHeadingContainer = tw.div`
    h-1/4
    border-eComHeaderBorder
    border-b-2
`

export const H3 = tw.h3`
    text-[1rem]
    ml-[1.5rem]
    mt-[1rem]
    text-genericBlack
    font-bold
`

export const CartContent = tw.div`
    flex
    flex-col
    justify-start
    py-[1.1rem]
`

export const EmptyCartParag = tw.p`
    text-center
    text-eComNavTextColor
    font-bold
`

export const CartItem = tw.div`
    flex
    w-11/12
    items-center
    self-center
    justify-around
    text-eComNavTextColor
`

export const ImageThumbnailWrapper = tw.div`
    w-[3.5rem]
    h-[3.5rem]
    inline-block
`

export const ImageThumb = tw.img`
    rounded-md
`

export const ItemDetails = tw.div`
    px-[.8rem]
    leading-relaxed
`

export const Strong = tw.strong`
    text-genericBlack
`

export const CheckOutBtn = tw.button`
    
`