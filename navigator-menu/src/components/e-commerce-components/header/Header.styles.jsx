import tw from "tailwind-styled-components/dist/tailwind";

export const Wrapper = tw.header`
    h-[5rem]
    my-[1rem]
    pb-[1rem]
    border-eComHeaderBorder
    border-b-2
    flex
    justify-between

    phone:flex
    phone:justify-around
    phone:mt-0
    phone:mb-0
    phone:p-0

    tablet:flex
    tablet:justify-around
    tablet:mt-0
    tablet:mb-0
    tablet:p-0
`