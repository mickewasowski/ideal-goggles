import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";


export const Wrapper = tw.footer`
    flex
    justify-between
    my-[7rem]
`

export const LogoContainer = tw.div`
flex-[2_2_0%]
`

export const CopyrightWrapper = tw.div`
w-1/4
flex-[2_2_0%]
`

export const IconsWrapper = tw.div`
flex-[4_4_0%]
flex
justify-end
`

export const AnchorTag = tw(NavLink)`
    ml-[2rem]
    no-underline

`