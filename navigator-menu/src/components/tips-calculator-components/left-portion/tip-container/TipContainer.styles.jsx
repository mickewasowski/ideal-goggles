import tw from "tailwind-styled-components/dist/tailwind";

export const Container = tw.div`
mt-2
h-3/5
`

export const Label = tw.label`
    text-lg
    font-bold
    text-tipsCalcLabelTextColor
`

export const PercentageBtns = tw.div`
    flex
    flex-row
    flex-wrap
    justify-between
    gap-3
    mt-4
`

export const Button = tw.button`
    inline-block
    w-[9rem]
    h-[4rem]
    border-none
    rounded-md
    text-3xl
    font-bold
    bg-tipsCalcBtnBG
    text-genericWhite

    hover:bg-tipsCalcBtnHover
    hover:text-tipsCalcBtnTextHover
    hover:cursor-pointer
`

export const InputBtn = tw.input`
    inline-block
    w-[9rem]
    h-[4rem]
    border-none 
    rounded-md
    text-3xl
    font-bold
    bg-tipsCalcCustBtnBG
    text-center

    hover:outline-2
    hover:outline
    hover:outline-tipsCalcInputDivOutline
    hover:cursor-pointer

    focus:outline-2
    focus:outline
    focus:outline-tipsCalcInputDivOutline
`