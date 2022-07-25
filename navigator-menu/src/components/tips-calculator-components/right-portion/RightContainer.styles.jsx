import tw from "tailwind-styled-components/dist/tailwind";

export const Container = tw.div`
    w-2/5
    h-4/5
    bg-tipsCalcRightBG
    rounded-xl
    flex
    flex-col
    items-center
    justify-around
`

export const Wrapper = tw.div`
w-5/6
flex
items-center
justify-between
`

export const Reset = tw.button`
inline-block
w-full
h-[3rem]
bg-tipsCalcResetBtn
rounded-md
text-tipsCalcResetBtnText
uppercase
font-bold
text-xl

hover:bg-tipsCalcResetBtnHover
`