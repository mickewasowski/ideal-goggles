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