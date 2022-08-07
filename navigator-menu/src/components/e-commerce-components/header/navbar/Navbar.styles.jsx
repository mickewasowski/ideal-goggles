import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";

export const ButtonsContainer = tw.div`
flex
justify-start
`

export const LogoContainer = tw.div`
    flex
    mr-[1.1rem]
`

export const AnchorTag = tw(NavLink)`
    justify-center
    self-center
`

export const NavigationContainer = tw.div`
    flex
    items-center
    m-[.6rem]
`

export const Navigation = tw.nav`
    flex
`

export const Ul = tw.ul`
    flex
    items-center
    justify-center
`

export const LiItem = tw.li`
    m-[.7rem]
    py-[2.25rem]
    list-none
    text-eComNavTextColor
    border-b-2
    border-eComHeaderBorder

    hover:border-eComNavTextBorderHover
    hover:cursor-pointer
    hover:text-eComNavTextColorHover
`