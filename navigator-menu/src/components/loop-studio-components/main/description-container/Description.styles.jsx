import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.div`
    flex
    items-end
    pt-[10rem]
    pl-[10rem]
`

export const VRGoggles = tw.div`
    w-[55rem]
    h-[35rem]
    bg-vr-goggles-desktop
    bg-no-repeat
    bg-center
    bg-cover
`

export const DescriptionContainer = tw.div`
    w-[30rem]
    h-[20rem]
    bg-genericWhite
    relative
    -left-[12rem]
    flex
    flex-col
    justify-end
    gap-[2rem]
    pl-[5rem]
`

export const Heading = tw.h2`
    font-josefin-sans
    uppercase
    m-0
    text-5xl
    font-light
`

export const Parag = tw.p`
    m-0
    font-alata
    font-normal
    text-loopStudioDescParag
`