import tw from "tailwind-styled-components/dist/tailwind";

export const ItemWrapper = tw.div`
w-[19rem]
h-[28.1rem]
bg-no-repeat
bg-cover
bg-[#00000066]
bg-blend-hard-light

flex
flex-col
justify-end
items-center

text-genericWhite

hover:text-genericBlack
hover:cursor-pointer
`

export const Backdrop = tw.div`
w-[19rem]
h-[28.1rem]
bg-[#ffffff99]

relative
z-1
`

export const H3 = tw.h3`
z-[2]
absolute
font-josefin-sans
font-light
text-[1.8rem]
`