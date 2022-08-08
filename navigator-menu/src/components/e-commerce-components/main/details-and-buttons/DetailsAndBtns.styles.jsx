import tw from "tailwind-styled-components/dist/tailwind";

export const Details = tw.div`
    w-[30rem]
    h-[30rem]
    flex
    flex-col
    justify-around
`

export const SneakerH3 = tw.h3`
    text-eComOrangeColor
    uppercase
    tracking-wider
    text-[1rem]
    font-bold
`

export const LimitedH1 = tw.h1`
    text-eComLimitedH1Text
    text-[3rem]
    font-bold
    mt-[1rem]
`

export const DescriptionParag = tw.p`
    text-eComNavTextColor
    leading-relaxed
`

export const Price = tw.div`
    flex
    flex-col
`

export const CurrentPriceWrapper = tw.div`
    flex
    justify-start
    items-center
`

export const CurrentPriceParag = tw.p`
    mr-[1.5rem]
    text-[2rem]
    font-bold
    text-eComLimitedH1Text
`

export const Discount = tw.p`
    text-eComOrangeColor
    text-[1.2rem]
    font-bold
    py-[.2rem]
    px-[.3rem]
    bg-eComDiscountBg
    rounded-md
`

export const OriginalPriceWrapper = tw.div`
    mt-[1rem]
`

export const OriginalPriceParag = tw.p`
    text-eComOriginalPriceText
    font-bold
    line-through
`

export const CartBtns = tw.div`
    flex
    justify-between
    items-center
`

export const QuantityBtns = tw.div`
    flex
    items-center
    bg-eComQuantityBtnsBg
    rounded-xl
`

export const Btn = tw.span`
    w-[4rem]
    h-[3.5rem]
    bg-inherit
    rounded-xl
    flex
    justify-center
    items-center
`

export const QuantityInput = tw.input`
    bg-eComQuantityBtnsBg
    w-[3.6rem]
    text-center
    text-[1.2rem]
    font-bold

    focus:outline-none
`

export const AddToCartWrapper = tw.div`
    flex
    bg-eComOrangeColor
    w-[15rem]
    h-[3.5rem]
    rounded-xl
    justify-center
    items-center

    hover:cursor-pointer
    hover:bg-opacity-70
`

export const CartImg = tw.img`
    w-[1.3rem]
    h-[1.3rem]
    mr-[.4rem]
`

export const AddBtn = tw.button`
    text-genericWhite
    text-[1.1rem]
    font-bold
`